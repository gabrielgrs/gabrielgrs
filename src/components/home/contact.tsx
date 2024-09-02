'use client'

import { texts } from '@/utils/texts'
import { Language } from '@/utils/texts/type'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function Contact({ language }: { language: Language }) {
	const { contact } = texts[language]

	return (
		<section id="contact" className="relative flex flex-col items-center justify-center gap-6 min-h-screen">
			<motion.h1
				initial={{ scale: 0 }}
				whileInView={{ scale: [0, 1.2, 1] }}
				transition={{ duration: 1 }}
				className="text-center text-9xl font-bold text-foreground/20"
			>
				{contact.title}
			</motion.h1>
			<a
				href="mailto:grxgabriel@gmail"
				className="flex items-center justify-center gap-2 text-lg relative group p-2 hover:scale-150 duration-500 hover:-rotate-12 hover:tracking-widest"
			>
				<span className="group-hover:text-background relative z-10 duration-500">grxgabriel@gmail.com</span>
				<ArrowUpRight
					size={20}
					className="text-foreground group-hover:text-background group-hover:rotate-45 relative z-10 duration-500"
				/>
				<div className="absolute w-full h-0.5 bg-foreground bottom-0 group-hover:h-full duration-500" />
			</a>
		</section>
	)
}
