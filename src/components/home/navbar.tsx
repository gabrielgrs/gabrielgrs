'use client'

import { downloadPdfFromUrl } from '@/actions/converter'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/utils/constants'
import { Texts } from '@/utils/texts/type'
import { motion } from 'framer-motion'
import { ArrowUpRight, FileText, Languages, Lightbulb, Loader2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
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

export function Navbar() {
	const [generatingResume, setIsGeneratingResume] = useState(false)

	const { theme, setTheme } = useTheme()
	const {
		language,
		onChangeLanguage,
		texts: { navbar },
	} = useLanguage()

	const onGenerateResume = async () => {
		setIsGeneratingResume(true)
		const targetUrl = `${window.location.origin}/resume`
		const base64Pdf = await downloadPdfFromUrl(targetUrl)
		// download base64 as pdf

		const link = document.createElement('a')
		link.href = `data:application/pdf;base64,${base64Pdf}`
		link.download = 'resume.pdf'
		link.click()
		setIsGeneratingResume(false)
	}

	return (
		<header className="flex justify-around items-center text-sm h-14 w-full backdrop-blur-lg max-w-5xl fixed top-1 left-1/2 -translate-x-1/2 rounded-full z-50">
			<motion.span
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: ANIMATION_DURATION }}
				className="hidden md:block"
			>
				gabrielgrs
			</motion.span>
			<nav className="flex items-center gap-1 md:gap-4">
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
							className="text-gray-500 group-hover:text-foreground group-hover:rotate-45 duration-500"
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
					{navbar.language} <Languages size={12} />
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
						{navbar.theme} <Lightbulb size={12} />
					</motion.button>
				</OnlyClient>
				<motion.button
					disabled={generatingResume}
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{
						duration: ANIMATION_DURATION,
						delay: ANIMATION_DURATION * 6,
					}}
					onClick={() => onGenerateResume()}
					className="flex items-center gap-1 px-2 py-1 hover:bg-foreground rounded-full hover:text-background duration-500"
				>
					{navbar.resume} {generatingResume ? <Loader2 className="animate-spin" size={12} /> : <FileText size={12} />}
				</motion.button>
			</nav>
		</header>
	)
}
