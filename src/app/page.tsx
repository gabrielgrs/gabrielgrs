import { getLanguage } from '@/actions/language'
import { HomeTemplate } from '@/components/home'

export default async function Home() {
	const language = await getLanguage()

	return <HomeTemplate initialLanguage={language} />
}
