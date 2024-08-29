'use client'

import { GithubData } from '@/types'
import { Home } from 'lucide-react'
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

export function HomeTemplate({ githubData, showNavbar }: Props) {
	const [distance, setDistance] = useState(0)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setDistance(window.scrollY)
		})
	}, [])

	return (
		<div className="relative">
			<div className="mx-auto max-w-2xl px-4 relative z-10">
				{showNavbar ? (
					<Navbar />
				) : (
					<DynamicIsland
						icon={Home}
						title={distance > 200 ? 'About' : 'gabrigrs'}
						subtitle={distance > 200 ? 'This is my website' : 'welcome'}
					/>
				)}

				<main>
					<Main avatar={githubData.avatar_url} name={githubData.name ?? 'Person avatar'} bio={githubData.bio!} />
					<Professional />
					<Education />
					<Skills />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</div>
		</div>
	)
}
