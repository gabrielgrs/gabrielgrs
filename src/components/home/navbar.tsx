'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { ArrowUpRight, Languages, Lightbulb } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { OnlyClient } from '../only-client'

const links = [
	{
		title: 'Email',
		href: 'mailto:grxgabriel@gmail',
	},
	{
		title: 'Github',
		href: 'https://github.com/gabrielgrs',
	},
	{
		title: 'Linkedin',
		href: 'https://www.linkedin.com/in/gabrielgrs/',
	},
]

export function Navbar() {
	const [language, setLanguage] = useState<'en' | 'pt'>('pt')
	const { theme, setTheme } = useTheme()

	return (
		<header className="flex justify-around items-center text-sm h-14 w-full backdrop-blur-lg max-w-5xl fixed top-1 left-1/2 -translate-x-1/2 rounded-full z-50">
			<motion.span initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.4 }} className="hidden md:block">
				Gabriel.grs
			</motion.span>
			<nav className="flex items-center gap-4">
				{links.map((link, index) => (
					<motion.a
						key={link.title}
						href={link.href}
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.4 }}
						className="relative duration-500 flex items-center gap-1 group px-2 py-1"
					>
						<span className="-top-4 opacity-0 absolute group-hover:opacity-100 group-hover:top-0 text-gray-500 group-hover:text-foreground duration-500">
							{link.title}
						</span>
						<span className="text-gray-500 group-hover:translate-y-4 group-hover:opacity-0  group-hover:text-foreground duration-500">
							{link.title}
						</span>

						<ArrowUpRight
							size={14}
							className="text-gray-500 group-hover:text-foreground group-hover:rotate-45 duration-500"
						/>
					</motion.a>
				))}
				<motion.button
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.4, delay: 1.2 }}
					onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
					className="flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500"
				>
					{language === 'en' ? 'pt' : 'en'} <Languages size={12} />
				</motion.button>
				<OnlyClient>
					<motion.button
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.4, delay: 1.6 }}
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
						className={cn(
							'flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500',
							theme === 'dark' && 'line-through',
						)}
					>
						light <Lightbulb size={12} />
					</motion.button>
				</OnlyClient>
			</nav>
		</header>
	)
}
