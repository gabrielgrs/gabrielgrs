'use client'

import { GithubData } from '@/types'
import { Home, LucideIcon } from 'lucide-react'
import { createRef, useRef } from 'react'
import { useEffect, useState } from 'react'
import { Contact } from './contact'
import { DynamicIsland } from './dynamic-island'
import { Education } from './education'
import { Footer } from './footer'
import { Main } from './main'
import { Navbar } from './navbar'
import { Professional } from './professional'
import { Projects } from './projects'
import { Skills } from './skills'

type Props = {
	githubData: GithubData
	bio: string
	showNavbar: boolean
}

type SectionName = 'home' | 'about' | 'projects' | 'contact'

type Section = {
	identifier: SectionName
	title: string
	subtitle: string
	icon: LucideIcon
}

const sections: Section[] = [
	{
		identifier: 'home',
		title: 'gabrielgrs',
		subtitle: 'Welcome!',
		icon: Home,
	},
	{
		identifier: 'about',
		title: 'About',
		subtitle: 'This is my website',
		icon: Home,
	},
	{
		identifier: 'projects',
		title: 'Projects',
		subtitle: 'There are my selected projects',
		icon: Home,
	},
	{
		identifier: 'contact',
		title: 'Contact',
		subtitle: `Let's get in touch!`,
		icon: Home,
	},
]

export function HomeTemplate({ githubData, showNavbar }: Props) {
	const [activeSection, setActiveSection] = useState<SectionName>('home')

	const sectionRefs = useRef<any>(sections.map(() => createRef()))

	useEffect(() => {
		const observers = sections.map((section, index) => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveSection(section.identifier)
					}
				},
				{ threshold: 0.5 },
			)

			if (sectionRefs.current[index].current) {
				observer.observe(sectionRefs.current[index].current)
			}

			return observer
		})

		return () => {
			observers.forEach((observer) => observer.disconnect())
		}
	}, [])

	return (
		<div className="relative">
			<div className="mx-auto max-w-2xl px-4 relative z-10">
				{showNavbar ? (
					<Navbar />
				) : (
					<DynamicIsland
						icon={Home}
						title={sections.find((section) => section.identifier === activeSection)?.title ?? 'gabrigrs'}
						subtitle={sections.find((section) => section.identifier === activeSection)?.subtitle ?? 'welcome'}
					/>
				)}

				<main>
					<div ref={sectionRefs.current[0]}>
						<Main avatar={githubData.avatar_url} name={githubData.name ?? 'Person avatar'} bio={githubData.bio!} />
					</div>
					<div ref={sectionRefs.current[1]}>
						<Professional />
						<Education />
						<Skills />
					</div>
					<div ref={sectionRefs.current[2]}>
						<Projects />
					</div>
					<div ref={sectionRefs.current[3]}>
						<Contact />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}
