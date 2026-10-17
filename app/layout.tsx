import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Gabriel Ribeiro — Front-end engineer",
  description:
    "Gabriel Ribeiro is a front-end engineer in Florianópolis, Brazil, building interfaces with React and Next.js since 2017.",
  authors: [{ name: "Gabriel Ribeiro", url: "https://github.com/gabrielgrs" }],
  openGraph: {
    title: "Gabriel Ribeiro — Front-end engineer",
    description:
      "Front-end engineer in Florianópolis, Brazil. React, Next.js and TypeScript since 2017.",
    type: "profile",
  },
  twitter: { card: "summary_large_image", creator: "@gabugando" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f3f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f2e" },
  ],
};

// Runs before first paint: a saved choice wins, otherwise follow the system setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${martian.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip font-sans">{children}</body>
    </html>
  );
}
