export type Language = 'en' | 'pt'

type ProfessionalItem = {
	role: string
	company: string
	description: string
	startAt: Date
	endAt: Date | null
}

type AcademicItem = {
	institution: string
	title: string
	startAt: Date
	endAt: Date
}

type ProjectItem = {
	title: string
	description: string
	source: string
	website: string
}

export type Texts = {
	navbar: {
		email: string
		github: string
		linkedin: string
		language: string
		theme: string
	}
	main: {
		greeting: string
		job: string
		description: string
		scroll: string
	}
	professional: {
		title: string
		list: ProfessionalItem[]
	}
	academic: {
		title: string
		list: AcademicItem[]
	}
	projects: {
		title: string
		source?: string
		website?: string
		list: ProjectItem[]
	}
	skills: {
		title: string
		list: string[]
	}
	contact: {
		title: string
	}
	buyMeCoffee: string
	footer: {
		start: string
		end: string
	}
}
