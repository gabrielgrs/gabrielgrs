type AcademicAndWork = {
	title: string
	institution: string
	startAt: Date
	endAt: Date | null
	description: string
}

export const works: AcademicAndWork[] = [
	{
		title: 'Internal Developer',
		institution: 'Stefanini IT',
		startAt: new Date(2022, 9),
		endAt: new Date(2022, 9),
		description: 'Lorem ipsum',
	},
	{
		title: 'Full-stack Mid Developer',
		institution: 'Stefanini IT',
		startAt: new Date(2022, 9),
		endAt: new Date(2022, 9),
		description: 'Lorem ipsum',
	},
	{
		title: 'Full-stack Developer',
		institution: 'Leopardus - Freelance',
		startAt: new Date(2022, 9),
		endAt: new Date(2022, 9),
		description: 'Lorem ipsum',
	},
	{
		title: 'CTO',
		icon: '',
		institution: 'Biodinâmica Saúde',
		startAt: new Date(2022, 9),
		endAt: new Date(2022, 9),
		description: 'Lorem ipsum',
	},
	{
		title: 'Front-end Senior Developer',
		institution: 'Trinca',
		startAt: new Date(2019, 0),
		endAt: null,
		description: 'Lorem ipsum',
	},
]

export const education: AcademicAndWork[] = [
	{
		title: 'Imagine CUP',
		institution: 'PUC',
		startAt: new Date(2018, 9),
		endAt: new Date(2021, 5),
		description: 'Lorem ipsum',
	},
	{
		title: 'ADS',
		institution: 'Senac',
		startAt: new Date(2018, 9),
		endAt: new Date(2021, 5),
		description: 'Lorem ipsum',
	},
	{
		title: 'MBA Software Engineering',
		institution: 'FIAP',
		startAt: new Date(2018, 9),
		endAt: new Date(2021, 5),
		description: 'Lorem ipsum',
	},
]

type Skill = {
	icon: string
	text: string
}

export const skills: Skill[] = [
	'Vim',
	'Neovim',
	'VSCode',
	'React',
	'Next',
	'Typescript',
	'Tailwind',
	'Git',
	'Azure',
	'Figma',
].map((item) => ({
	icon: item,
	text: item,
}))

type Project = {
	title: string
	description: string
	tags: string[]
	source: string
	website: string
}

export const projects: Project[] = [
	{
		title: 'Project 1',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
		tags: ['tag 1', 'tag 2'],
		source: 'github.com',
		website: 'website.com',
	},
	{
		title: 'Project 2',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
		tags: ['tag 1', 'tag 2'],
		source: 'github.com',
		website: 'website.com',
	},
]
