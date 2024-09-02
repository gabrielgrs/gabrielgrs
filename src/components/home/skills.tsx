'use client'

import { motion } from 'framer-motion'
import { skills } from './helpers'

export function Skills() {
	return (
		<section className="pb-10 relative backdrop-blur-sm">
			<h2 className="relative">Skills</h2>
			<motion.ul
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}
				initial={{ opacity: 0, filter: 'blur(10px)' }}
				className="flex flex-wrap gap-4 animate-infinite-scroll p-2 group"
			>
				{skills.map((item) => (
					<li key={item.text} className="hover:scale-125 duration-500">
						{item.text}
					</li>
				))}
			</motion.ul>
		</section>
	)
}
