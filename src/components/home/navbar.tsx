'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'
import { Texts } from '@/utils/texts/type'
import { motion } from 'framer-motion'
import { ArrowUpRight, Languages, Lightbulb } from 'lucide-react'
import { useTheme } from 'next-themes'
import { OnlyClient } from '../only-client'

const getLinks = (navbarTexts: Texts['navbar']) => [
	{
		title: navbarTexts.email,
		href: 'mailto:grxgabriel@gmail',
	},
	{
		title: navbarTexts.github,
		href: 'https://github.com/gabrielgrs',
	},
	{
		title: navbarTexts.linkedin,
		href: 'https://www.linkedin.com/in/gabrielgrs/',
	},
]

export function Navbar() {
	const { theme, setTheme } = useTheme()
	const {
		language,
		onChangeLanguage,
		texts: { navbar },
	} = useLanguage()

	return (
		<header className="flex justify-around items-center text-sm h-14 w-full backdrop-blur-lg max-w-5xl fixed top-1 left-1/2 -translate-x-1/2 rounded-full z-50">
			<motion.span initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.4 }} className="hidden md:block">
				gabrielgrs
			</motion.span>
			<nav className="flex items-center gap-1 md:gap-4">
				{getLinks(navbar).map((link, index) => (
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
					onClick={() => onChangeLanguage(language === 'en' ? 'pt' : 'en')}
					className="flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500"
				>
					{navbar.language} <Languages size={12} />
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
						{navbar.theme} <Lightbulb size={12} />
					</motion.button>
				</OnlyClient>
			</nav>
		</header>
	)
}
