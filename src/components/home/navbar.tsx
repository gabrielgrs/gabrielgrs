'use client'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/utils/constants'
import { Texts } from '@/utils/texts/type'
import { motion } from 'framer-motion'
import { ArrowUpRight, FileText, Languages, Lightbulb } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { OnlyClient } from '../only-client'

const getLinks = (navbarTexts: Texts['navbar']) => [
	{
		title: navbarTexts.email,
		href: `mailto:${EMAIL}`,
	},
	{
		title: navbarTexts.github,
		href: GITHUB_URL,
	},
	{
		title: navbarTexts.linkedin,
		href: LINKEDIN_URL,
	},
]

const ANIMATION_DURATION = 0.3

export function Navbar({ onGenerateResume }: { onGenerateResume: () => void }) {
	const [isOnTop, setIsOnTop] = useState(false)

	const { theme, setTheme } = useTheme()
	const {
		language,
		onChangeLanguage,
		texts: { navbar },
	} = useLanguage()

	useEffect(() => {
		const onScroll = () => {
			setIsOnTop(window.scrollY < 30)
		}

		onScroll()

		window.addEventListener('scroll', onScroll)
		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
		<header
			className={cn(
				'duration-500 w-full sticky top-0 flex justify-center items-center z-50',
				isOnTop ? 'h-20' : 'backdrop-blur-lg h-14',
			)}
		>
			<motion.span
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: ANIMATION_DURATION }}
				className="hidden md:block min-w-32"
			>
				gabrielgrs
			</motion.span>
			<nav className="flex items-center gap-0 md:gap-4">
				{getLinks(navbar).map((link, index) => (
					<motion.a
						key={link.title}
						href={link.href}
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							duration: ANIMATION_DURATION,
							delay: index * ANIMATION_DURATION,
						}}
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
							className="text-gray-500 group-hover:text-foreground group-hover:rotate-45 duration-500 hidden md:block"
						/>
					</motion.a>
				))}
				<motion.button
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{
						duration: ANIMATION_DURATION,
						delay: ANIMATION_DURATION * 4,
					}}
					onClick={() => onChangeLanguage(language === 'en' ? 'pt' : 'en')}
					className="flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500"
				>
					{navbar.language} <Languages size={14} className="hidden md:block" />
				</motion.button>
				<OnlyClient>
					<motion.button
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							duration: ANIMATION_DURATION,
							delay: ANIMATION_DURATION * 5,
						}}
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
						className={cn(
							'flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500',
							theme === 'dark' && 'line-through',
						)}
					>
						{navbar.theme} <Lightbulb size={14} className="hidden md:block" />
					</motion.button>
				</OnlyClient>
				<motion.button
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{
						duration: ANIMATION_DURATION,
						delay: ANIMATION_DURATION * 6,
					}}
					onClick={() => onGenerateResume()}
					className="flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500"
				>
					Resume
					<FileText size={14} className="hidden md:block" />
				</motion.button>
			</nav>
		</header>
	)
}
