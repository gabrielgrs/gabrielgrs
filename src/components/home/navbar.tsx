'use client'

import { motion } from 'framer-motion'
import { AtSign, Github, Lightbulb } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ReactNode } from 'react'
import { OnlyClient } from '../only-client'

export type NavItemProps = {
	children: ReactNode
	href: string
}

const itemClassName =
	'relative text-gray-500 hover:text-foreground duration-500 hover:bg-foreground/10 px-4 py-2 rounded-lg flex items-center justify-center'

function NavItem({ children, href }: NavItemProps) {
	return (
		<a href={href} className={itemClassName}>
			{children}
		</a>
	)
}

export function Navbar({ login }: { login: string }) {
	const { theme, setTheme } = useTheme()

	return (
		<motion.header
			initial={{ opacity: 0, filter: 'blur(10px)' }}
			animate={{ opacity: 1, filter: 'blur(0px)' }}
			transition={{ duration: 0.5, delay: 1.5 }}
			className="flex justify-between items-center text-lg h-16 sticky top-0 z-10 backdrop-blur-md px-[5vw]"
		>
			<Link href="#">{login}</Link>
			<nav className="flex items-center gap-2">
				<NavItem href="#about">About</NavItem>
				<NavItem href="#work">Work</NavItem>
				<NavItem href="#contact">Contact</NavItem>
				<OnlyClient>
					<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={itemClassName}>
						<Lightbulb size={18} className="text-gray-500" />
					</button>
				</OnlyClient>
				<button className={itemClassName}>
					<Github size={18} className="text-gray-500" />
				</button>
				<button className={itemClassName}>
					<AtSign size={18} className="text-gray-500" />
				</button>
			</nav>
			<div className="bg-gradient-to-r from-background/0 via-foreground/20 to-background/0 w-full h-[1px] absolute left-0 bottom-0" />
		</motion.header>
	)
}
