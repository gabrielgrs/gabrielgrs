'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'
import dayjs from 'dayjs'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Minus } from 'lucide-react'
import { useState } from 'react'

export function Professional() {
	const [openSetions, setOpenSetions] = useState<number[]>([])
	const {
		texts: { professional },
	} = useLanguage()

	return (
		<section className="mt-20 relative backdrop-blur">
			<h2 className="relative">{professional.title}</h2>
			<ul className="flex flex-col gap-4 pb-10">
				{professional.list
					.sort((a, b) => b.startAt.getTime() - a.startAt.getTime())
					.map((item, index) => {
						return (
							<motion.li
								key={`work_${item.role}_${index}`}
								whileInView={{ opacity: 1, filter: 'blur(0px)' }}
								initial={{ opacity: 0, filter: 'blur(10px)' }}
								transition={{ delay: 0.3 * index }}
								className="grid grid-cols-[180px,auto,20px] rounded-lg p-2 place-items-start hover:-translate-y-2 hover:translate-x-1 hover:bg-foreground/5 duration-300"
							>
								<div className="text-sm text-gray-500 flex items-center">
									{dayjs(item.startAt).format('MMM YYYY')} <Minus />{' '}
									{item.endAt ? dayjs(item.endAt).format('MMM YYYY') : 'Present'}
								</div>
								<div className="flex flex-col gap-2">
									<span>{item.role}</span>
									<span className="text-sm text-gray-400">{item.company}</span>
								</div>
								<button
									className={'opacity-70 hover:opacity-100 duration-500'}
									onClick={() =>
										setOpenSetions((prev) =>
											prev.includes(index) ? prev.filter((x) => x !== index) : [...prev, index],
										)
									}
								>
									<ChevronDown
										size={20}
										className={cn('duration-500', openSetions.includes(index) ? 'rotate-90' : 'rotate-0')}
									/>
								</button>
								<AnimatePresence>
									{openSetions.includes(index) && (
										<motion.div
											initial={{ height: 0 }}
											animate={{ height: 'auto' }}
											exit={{ height: 0, transition: { duration: 0.5 } }}
											transition={{
												duration: 1,
												type: 'spring',
												stiffness: 500,
												damping: 30,
											}}
											className="col-span-2 pl-[180px] pt-2 text-sm text-gray-500 overflow-hidden"
										>
											{item.description}
										</motion.div>
									)}
								</AnimatePresence>
							</motion.li>
						)
					})}
			</ul>
		</section>
	)
}
