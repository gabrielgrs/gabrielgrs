import { ReactNode } from 'react'

export type SectionProps = {
	children: ReactNode
	title: string
	id: string
}

export function Section({ title, children, id }: SectionProps) {
	return (
		<section id={id} className="py-6">
			<h2 className="relative">{title}</h2>
			<br />
			<div>{children}</div>
		</section>
	)
}
