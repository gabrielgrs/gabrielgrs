'use client'

import { motion } from 'framer-motion'

type Props = {
	avatar: string
	name: string
	bio: string
}
export function Main({ name, bio }: Props) {
	return (
		<>
			<section className="min-h-screen flex items-center justify-center gap-2">
				<div className="w-full flex flex-col gap-4">
					<motion.p
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						className="text-gray-500"
					>
						Hi, I am {name}. 👋
					</motion.p>
					<motion.p
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 0.5 }}
						className="text-xs uppercase  bg-opacity-10 text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-pink-500 text-pink-500 "
					>
						digital craftsman
					</motion.p>
					<motion.p
						whileInView={{ opacity: 1, filter: 'blur(0px)' }}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						transition={{ delay: 1 }}
						className="max-w-80 text-xl"
					>
						{bio}
					</motion.p>
				</div>
			</section>
			<div className="flex flex-col justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%]">
				<a href="#about" className="animate-bounce text-gray-500">
					Scroll
				</a>
				<div className="h-16 w-0.5 bg-gradient-to-b from-primary to-background translate-y-4" />
			</div>
		</>
	)
}
