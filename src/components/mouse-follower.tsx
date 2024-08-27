'use client'

import { useEffect, useState } from 'react'

export function MouseFollower() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			})
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<div
			className="absolute w-14 h-14 border-2 border-foreground rounded-full pointer-events-none z-50 shadow-lg"
			style={{
				top: mousePosition.y,
				left: mousePosition.x,
				transform: 'translate(-50%, -50%)',
			}}
		></div>
	)
}
