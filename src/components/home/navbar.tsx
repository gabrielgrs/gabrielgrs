'use client'
import { ArrowUpRight } from 'lucide-react'

export function Navbar() {
	return (
		<div className="fixed top-0 left-0 w-full flex items-center justify-center z-40 px-4">
			<header className="flex justify-between items-center text-sm h-16 w-full max-w-3xl">
				<span>Gabriel.grs</span>
				<nav className="flex items-center gap-4">
					<a className="duration-500 flex items-center gap-1 group">
						<span className="text-gray-500 group-hover:text-foreground duration-500">Email</span>
						<ArrowUpRight
							size={14}
							className="text-gray-500 group-hover:text-foreground group-hover:rotate-45 duration-500"
						/>
					</a>

					<a className="duration-500  flex items-center gap-1 group">
						<span className="text-gray-500 group-hover:text-foreground duration-500">Github</span>
						<ArrowUpRight
							size={14}
							className="text-gray-500 group-hover:text-foreground group-hover:rotate-45 duration-500"
						/>
					</a>

					<a className="duration-500  flex items-center gap-1 group">
						<span className="text-gray-500 group-hover:text-foreground duration-500">LinkedIn</span>
						<ArrowUpRight
							size={14}
							className="text-gray-500 group-hover:text-foreground group-hover:rotate-45 duration-500"
						/>
					</a>
				</nav>
			</header>
		</div>
	)
}
