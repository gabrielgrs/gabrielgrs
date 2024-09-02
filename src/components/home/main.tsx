'use client'

import { texts } from '@/utils/texts'
import { Language } from '@/utils/texts/type'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

type Props = {
	name: string
	language: Language
}
export function Main({ name, language }: Props) {
	const { main } = texts[language]

	return (
		<div className="relative">
			<section className="min-h-screen flex items-center justify-center gap-2">
				<div className="w-full flex flex-col gap-4">
					<motion.div whileInView={{ opacity: 1, filter: 'blur(0px)' }} initial={{ opacity: 0, filter: 'blur(10px)' }}>
						<Image
							src="/avatar.jpg"
							alt={name}
							width={100}
							height={100}
							className="rounded-3xl hover:scale-125 duration-300"
						/>
					</motion.div>
					<motion.p
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.3 }}
						className="text-gray-500"
					>
						{main.greeting}. 👋
					</motion.p>
					<motion.p
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.5 }}
						className="text-xs uppercase  bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-pink-500 text-pink-500"
					>
						{main.job}
					</motion.p>
					<motion.p
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 1 }}
						className="max-w-80 text-xl text-foreground/90"
					>
						{main.description}
					</motion.p>
				</div>
			</section>
			<div className="flex flex-col justify-center items-center absolute bottom-4 left-[50%] translate-x-[-50%]">
				<a href="#about" className=" text-gray-500 flex gap-2 flex-col items-center justify-center">
					{main.scroll}
					<ChevronDown className="text-primary/50 animate-bounce" />
				</a>
			</div>
		</div>
	)
}
