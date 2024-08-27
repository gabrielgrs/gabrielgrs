'use client'

import { motion } from 'framer-motion'
import { skills } from './helpers'
import { Section } from './section'

export function Skills() {
	return (
		<Section title="Skills" id="skills">
			<motion.ul
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}
				initial={{ opacity: 0, filter: 'blur(10px)' }}
				className="flex gap-2 animate-infinite-scroll"
			>
				{skills.map((item) => (
					<li key={item.text}>{item.text}</li>
				))}
			</motion.ul>
		</Section>
	)
}
