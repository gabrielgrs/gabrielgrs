'use client'

import { motion } from 'framer-motion'
import { skills } from './helpers'

export function Skills() {
	return (
		<section className="pb-10">
			<h2 className="relative">Skills</h2>
			<motion.ul
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}
				initial={{ opacity: 0, filter: 'blur(10px)' }}
				className="flex gap-2 animate-infinite-scroll p-2"
			>
				{skills.map((item) => (
					<li key={item.text}>{item.text}</li>
				))}
			</motion.ul>
		</section>
	)
}
