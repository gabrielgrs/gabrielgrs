'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Github, LucideIcon, Twitter } from 'lucide-react'
import { useState } from 'react'

type Props = {
	icon: LucideIcon
	title: string
	subtitle: string
}

export function DynamicIsland({ icon: Icon, title, subtitle }: Props) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md">
			<motion.div
				className="bg-neutral-900 text-white rounded-full px-3 py-2 shadow-lg flex items-center justify-center cursor-pointer"
				initial={{ width: 'auto' }}
				animate={{
					width: isHovered ? '240px' : '160px',
					transition: { type: 'spring', stiffness: 500, damping: 30 },
				}}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
			>
				<motion.div
					className="mr-2 flex-shrink-0"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: 'spring', stiffness: 500, damping: 30 }}
				>
					<Icon size={16} />
				</motion.div>
				<AnimatePresence mode="wait">
					<motion.div
						key={title}
						className="flex flex-col items-start overflow-hidden"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ type: 'spring', stiffness: 500, damping: 30 }}
					>
						<span className="text-sm font-semibold whitespace-nowrap">{title}</span>
						{isHovered && (
							<motion.div
								className="flex flex-col items-start"
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
							>
								<span className="text-xs text-gray-500 whitespace-nowrap">{subtitle}</span>
								<div className="flex mt-1 space-x-2">
									<a
										href="https://github.com/yourusername"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-300 hover:text-white transition-colors"
										aria-label="GitHub Profile"
									>
										<Github size={14} />
									</a>
									<a
										href="https://twitter.com/yourusername"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-300 hover:text-white transition-colors"
										aria-label="Twitter Profile"
									>
										<Twitter size={14} />
									</a>
								</div>
							</motion.div>
						)}
					</motion.div>
				</AnimatePresence>
				<motion.div className="ml-auto flex-shrink-0" animate={{ rotate: isHovered ? 90 : 0 }}>
					<ChevronRight size={16} />
				</motion.div>
			</motion.div>
		</header>
	)
}
