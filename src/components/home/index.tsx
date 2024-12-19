'use client'
import Resume from '@/app/resume/page'
import { Academic } from './academic'
import { Contact } from './contact'
import { Footer } from './footer'
import { Main } from './main'
import { Navbar } from './navbar'
import { Professional } from './professional'
import { Projects } from './projects'
import { Skills } from './skills'

export function HomeTemplate() {
	const onGenerateResume = () => window.print()

	return (
		<div className="relative">
			<div className="only-print">
				<Resume />
			</div>
			<div className="mx-auto max-w-5xl px-4 relative z-10 hide-print">
				<Navbar onGenerateResume={onGenerateResume} />

				<main className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 pt-32">
					<Main />
					<div>
						<Professional />
						<Academic />
						<Skills />
						<Projects />
					</div>
				</main>
				<Contact />
				<Footer />
			</div>
		</div>
	)
}
