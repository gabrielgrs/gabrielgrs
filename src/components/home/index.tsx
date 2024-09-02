'use client'

import { changeLanguage } from '@/actions/language'
import { Language } from '@/utils/texts/type'
import { useState } from 'react'
import { Academic } from './academic'
import { Contact } from './contact'
import { Footer } from './footer'
import { Main } from './main'
import { Navbar } from './navbar'
import { Professional } from './professional'
import { Projects } from './projects'
import { Skills } from './skills'

type Props = {
	initialLanguage: Language
}

export function HomeTemplate({ initialLanguage }: Props) {
	const [language, setLanguage] = useState<Language>(initialLanguage)

	const onChangeLanguage = (linguageToSet: Language) => {
		setLanguage(linguageToSet)
		changeLanguage(linguageToSet)
	}

	return (
		<div className="relative">
			<div className="mx-auto max-w-2xl px-4 relative z-10">
				<Navbar language={language} onChangeLanguage={onChangeLanguage} />

				<main>
					<Main name="Gabriel" language={language} />
					<Professional language={language} />
					<Academic language={language} />
					<Skills language={language} />
					<Projects language={language} />

					<Contact language={language} />
				</main>
				<Footer language={language} />
			</div>
		</div>
	)
}
