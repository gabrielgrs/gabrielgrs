'use client'

import { changeLanguage, getLanguage } from '@/actions/language'
import { texts } from '@/utils/texts'
import { Language } from '@/utils/texts/type'
import { useQuery } from 'react-query'

export function useLanguage() {
	const { data: language = 'en', refetch } = useQuery({ queryKey: ['language'], queryFn: () => getLanguage() })

	const onChangeLanguage = async (linguageToSet: Language) => {
		await changeLanguage(linguageToSet)
		refetch()
	}

	return {
		language,
		texts: texts[language],
		onChangeLanguage,
	}
}
