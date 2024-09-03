'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Projects() {
	const [hovered, setHovered] = useState(-1)
	const {
		texts: { projects },
	} = useLanguage()

	return (
		<section className="relative backdrop-blur">
			<h2 className="relative">{projects.title}</h2>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projects.list.map((project, index) => (
					<motion.li
						key={`project_${project.title}_${index}`}
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.3 * index }}
						onMouseEnter={() => setHovered(index)}
						onMouseLeave={() => setHovered(-1)}
						className="p-4 rounded relative"
					>
						<span className="text-neutral-200 font-bold text-2xl mt-2">{project.title}</span>
						<p className="text-neutral-500 mt-2">{project.description}</p>

						<div className="flex items-center gap-1 pt-4">
							{project.source && (
								<a
									href={project.source}
									target="_blank"
									className="text-xs uppercase  bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-pink-500 text-pink-500 "
								>
									{project.source}
								</a>
							)}
							{project.website && (
								<a
									href={project.website}
									target="_blank"
									className="text-xs uppercase  bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-pink-500 text-pink-500 "
								>
									{project.website}
								</a>
							)}
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
