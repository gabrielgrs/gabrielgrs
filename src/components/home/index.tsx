'use client'

import { GithubData } from '@/types'
import { Contact } from './contact'
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

export function HomeTemplate({ githubData }: Props) {
	return (
		<div className="relative">
			<div className="mx-auto max-w-2xl px-4 relative z-10">
				<Navbar />

				<main>
					<Main name={githubData.name!} bio={githubData.bio!} />

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
