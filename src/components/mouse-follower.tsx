'use client'

import { useEffect, useState } from 'react'

export function MouseFollower() {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const updateCursorPosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', updateCursorPosition)

		return () => {
			window.removeEventListener('mousemove', updateCursorPosition)
		}
	}, [])

	return (
		<div
			className="fixed pointer-events-none h-6 w-6 rounded-full bg-foreground opacity-70 transition-all duration-300 ease-out z-0"
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
				transform: 'translate(-50%, -50%)',
			}}
		/>
	)
}
