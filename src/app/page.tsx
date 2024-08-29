import { HomeTemplate } from '@/components/home'
import { GithubData } from '@/types'

async function getGithubData(username: string): Promise<GithubData> {
	const response = await fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 60 * 5 } })
	return response.json()
}

async function generateAbout() {
	return 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
	// const response = await fetch('https://api.openai.com/v1/chat/completions', {
	// 	method: 'POST',
	// 	next: { revalidate: 60 * 5 },
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
	// 	},
	// 	body: JSON.stringify({
	// 		model: 'gpt-3.5-turbo',
	// 		messages: [
	// 			{
	// 				role: 'system',
	// 				content: 'You are a helpful assistant that will generate the string bio to directly put on my portfolio',
	// 			},
	// 			{ role: 'user', content: `Generate an small bio about a front-end engineer who works with next, typescript` },
	// 		],
	// 	}),
	// })
	// if (!response.ok) return 'Error'
	// const data = await response.json()

	// return data.choices[0].message.content
}

type Props = {
	searchParams: {
		t?: string
	}
}
export default async function Home(props: Props) {
	const data = await getGithubData('gabrielgrs')
	const bio = await generateAbout()

	return <HomeTemplate githubData={data} bio={bio} showNavbar={Boolean(props.searchParams.t)} />
}
