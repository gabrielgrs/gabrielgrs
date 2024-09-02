'use client'

import { texts } from '@/utils/texts'
import { Language } from '@/utils/texts/type'
import { motion } from 'framer-motion'

export function Skills({ language }: { language: Language }) {
	const { skills } = texts[language]

	return (
		<section className="pb-10 relative backdrop-blur-sm">
			<h2 className="relative">{skills.title}</h2>
			<motion.ul
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}
				initial={{ opacity: 0, filter: 'blur(10px)' }}
				className="flex flex-wrap gap-4 animate-infinite-scroll p-2 group"
			>
				{skills.list.map((skill) => (
					<li key={skill} className="hover:scale-125 duration-500">
						{skill}
					</li>
				))}
			</motion.ul>
		</section>
	)
}
