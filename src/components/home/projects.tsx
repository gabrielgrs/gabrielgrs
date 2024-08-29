'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from './helpers'

export function Projects() {
	const [hovered, setHovered] = useState(-1)

	return (
		<section>
			<h2 className="relative">Select projects</h2>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<motion.li
						key={project.title}
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.3 * index }}
						className="p-4 rounded relative"
						onMouseEnter={() => setHovered(index)}
						onMouseLeave={() => setHovered(-1)}
					>
						<div className="flex flex-col">
							<div className="flex items-center gap-1">
								{project.tags.map((tag, index) => (
									<span
										key={`tag_${tag}_${index}`}
										className="text-xs uppercase  bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-pink-500 text-pink-500 "
									>
										{tag}
									</span>
								))}
							</div>
							<span className="text-neutral-200 font-bold text-2xl mt-2">{project.title}</span>
							<p className="text-neutral-500 mt-2">
								A service selling curated domain names bundled with a logo, targeting indiehackers and startups.
							</p>
						</div>
						{hovered === index && (
							<motion.div
								layoutId="projectId"
								className="absolute w-full h-full bg-foreground/5 rounded-lg left-0 bottom-0"
							/>
						)}
					</motion.li>
				))}
			</ul>
		</section>
	)
}
