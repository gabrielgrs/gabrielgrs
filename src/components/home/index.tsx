'use client'

import { Academic } from './academic'
import { Contact } from './contact'
import { Footer } from './footer'
import { Main } from './main'
import { Navbar } from './navbar'
import { Professional } from './professional'
import { Projects } from './projects'
import { Skills } from './skills'

export function HomeTemplate() {
	return (
		<div className="relative">
			<div className="mx-auto max-w-2xl px-4 relative z-10">
				<Navbar />

				<main>
					<Main />
					<Professional />
					<Academic />
					<Skills />
					<Projects />

					<Contact />
				</main>
				<Footer />
			</div>
		</div>
	)
}
