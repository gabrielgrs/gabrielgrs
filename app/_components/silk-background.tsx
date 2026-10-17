"use client";

import { useEffect, useRef } from "react";

const VERTEX = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Satin folds: a domain-warped height field lit like fabric (diffuse + sheen), faded out towards the bottom.
const FRAGMENT = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uBackground;
uniform vec3 uInk;
uniform float uStrength;
uniform float uSteps; // > 0: posterize into this many ordered-dithered levels (pixel mode)

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2.0 + a.y * a.y * 0.75);
}

float bayer4(vec2 a) {
  return bayer2(0.5 * a) * 0.25 + bayer2(a);
}

float height(vec2 p, float t) {
  for (int i = 1; i < 5; i++) {
    float fi = float(i);
    p.x += 0.6 / fi * sin(fi * 1.5 * p.y + t * 0.3 + fi * 0.4);
    p.y += 0.5 / fi * cos(fi * 1.1 * p.x - t * 0.24 + fi * 1.3);
  }
  return 0.5 + 0.5 * sin(p.x * 1.4 + p.y * 1.1);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y * 2.4;
  p = mat2(0.87, -0.5, 0.5, 0.87) * p;

  float t = uTime;
  vec2 e = vec2(0.012, 0.0);
  float h = height(p, t);
  float dx = height(p + e.xy, t) - height(p - e.xy, t);
  float dy = height(p + e.yx, t) - height(p - e.yx, t);
  vec3 n = normalize(vec3(-dx, -dy, 0.035));

  vec3 light = normalize(vec3(-0.4, 0.7, 0.6));
  float diffuse = max(dot(n, light), 0.0);
  float sheen = pow(max(dot(reflect(-light, n), vec3(0.0, 0.0, 1.0)), 0.0), 12.0);
  float shade = clamp(diffuse * 0.55 + sheen * 0.55 + h * 0.15, 0.0, 1.0);

  // Strongest at the top edge, gone by a little past the middle.
  float mask = smoothstep(0.3, 1.0, uv.y);

  float v = shade * mask * uStrength;
  if (uSteps > 0.0) {
    v = min(floor(v * uSteps + bayer4(gl_FragCoord.xy)) / uSteps, 1.0);
    gl_FragColor = vec4(mix(uBackground, uInk, v), 1.0);
    return;
  }

  vec3 color = mix(uBackground, uInk, v);
  color += (hash(gl_FragCoord.xy) - 0.5) / 255.0 * 2.0; // dither against banding
  gl_FragColor = vec4(color, 1.0);
}
`;

function readColor(name: string): [number, number, number] {
  const hex = getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace("#", "");
  const n = parseInt(hex.length === 3 ? [...hex].map((c) => c + c).join("") : hex, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

/**
 * Animated grayscale silk behind the hero. Colors come from --background and --silk in globals.css.
 * `pixel` renders it as chunky, dithered pixel art with blocks of that many CSS pixels.
 */
export function SilkBackground({ className = "", pixel }: { className?: string; pixel?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!canvas || !gl) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uResolution = uniform("uResolution");
    const uTime = uniform("uTime");
    const uBackground = uniform("uBackground");
    const uInk = uniform("uInk");
    const uStrength = uniform("uStrength");
    gl.uniform1f(uniform("uSteps"), pixel ? 4 : 0);

    const applyTheme = () => {
      gl.uniform3fv(uBackground, readColor("--background"));
      gl.uniform3fv(uInk, readColor("--silk"));
      gl.uniform1f(uStrength, parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--silk-strength")) || 0.6);
    };

    // Smooth gradients don't need full resolution; the browser's upscale keeps them soft.
    const resize = () => {
      const scale = pixel ? 1 / pixel : Math.min(devicePixelRatio, 2) * 0.5;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    let visible = true;

    const draw = () => {
      gl.uniform1f(uTime, still ? 4 : (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.dataset.ready = "";
    };
    const loop = () => {
      draw();
      frame = requestAnimationFrame(loop);
    };
    const play = () => {
      cancelAnimationFrame(frame);
      if (still || !visible || document.hidden) draw();
      else frame = requestAnimationFrame(loop);
    };

    applyTheme();
    resize();
    play();

    const sizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    sizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      applyTheme();
      draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });
    viewObserver.observe(canvas);

    document.addEventListener("visibilitychange", play);

    return () => {
      cancelAnimationFrame(frame);
      sizeObserver.disconnect();
      themeObserver.disconnect();
      viewObserver.disconnect();
      document.removeEventListener("visibilitychange", play);
    };
  }, [pixel]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none opacity-0 transition-opacity duration-1000 data-[ready]:opacity-100 ${pixel ? "[image-rendering:pixelated]" : ""} ${className}`}
    />
  );
}
