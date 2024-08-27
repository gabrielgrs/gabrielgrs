import { Navbar } from '@/components/home/navbar'
import { GithubData } from '@/types'
import { Contact } from './contact'
import { Education } from './education'
import { Footer } from './footer'
import { Main } from './main'
import { Professional } from './professional'
import { Projects } from './projects'
import { Skills } from './skills'

type Props = {
	githubData: GithubData
	bio: string
}

export async function HomeTemplate({ githubData }: Props) {
	return (
		<>
			<Navbar login={githubData.login} />

			<div className="mx-auto max-w-2xl px-4">
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
		</>
	)
}
