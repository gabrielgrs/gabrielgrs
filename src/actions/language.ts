'use server'

import { Language } from '@/utils/texts/type'
import { cookies } from 'next/headers'

export async function changeLanguage(language: Language) {
	cookies().set('language', language)
	return
}

export async function getLanguage() {
	const cookieLanguage = cookies().get('language')?.value as Language | undefined
	return cookieLanguage ?? 'en'
}
