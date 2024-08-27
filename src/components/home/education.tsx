'use client'

import { Section } from './section'
import { education } from './helpers'
import dayjs from 'dayjs'
import { Minus } from 'lucide-react'
import { motion } from 'framer-motion'

export function Education() {
	return (
		<Section title="Education" id="education">
			<ul className="flex flex-col gap-4 pb-10">
				{education.map((item, index) => (
					<motion.li
						key={item.title}
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.3 * index }}
						className="grid grid-cols-[180px,auto] rounded-lg p-2 place-items-start hover:-translate-y-2 hover:translate-x-1 hover:bg-foreground/5 duration-300"
					>
						<div className="text-sm text-gray-500 flex items-center">
							{dayjs(item.startAt).format('MMM YYYY')} <Minus /> {dayjs(item.endAt).format('MMM YYYY')}
						</div>
						<div>
							<span>{item.title}</span>
							<br />
							<span>{item.institution}</span>
						</div>
					</motion.li>
				))}
			</ul>
		</Section>
	)
}
