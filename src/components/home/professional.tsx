'use client'

import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { Minus } from 'lucide-react'
import { works } from './helpers'

export function Professional() {
	return (
		<section>
			<h2 className="relative">Professionals</h2>
			<ul className="flex flex-col gap-4 pb-10">
				{works.map((item, index) => (
					<motion.li
						key={item.title}
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.3 * index }}
						className="grid grid-cols-[180px,auto] rounded-lg p-2 place-items-start hover:-translate-y-2 hover:translate-x-1 hover:bg-foreground/5 duration-300"
					>
						<div className="text-sm text-gray-500 flex items-center">
							{dayjs(item.startAt).format('MMM YYYY')} <Minus />{' '}
							{item.endAt ? dayjs(item.endAt).format('MMM YYYY') : 'Present'}
						</div>
						<div className="flex flex-col gap-2">
							<span>{item.title}</span>
							<span className="text-sm text-gray-400">{item.institution}</span>
						</div>
					</motion.li>
				))}
			</ul>
		</section>
	)
}
