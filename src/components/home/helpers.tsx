import { faker } from '@faker-js/faker'

type AcademicAndWork = {
	title: string
	institution: string
	startAt: Date
	endAt: Date | null
	description: string
}

export const works: AcademicAndWork[] = [
	{
		title: 'Intern Developer',
		institution: 'Stefanini IT',
		startAt: new Date(2017, 1),
		endAt: new Date(2018, 8),
		description: faker.lorem.paragraph(2),
	},
	{
		title: 'Full-stack Mid Developer',
		institution: 'Stefanini IT',
		startAt: new Date(2018, 8),
		endAt: new Date(2018, 12),
		description: faker.lorem.paragraph(2),
	},
	{
		title: 'Full-stack Developer',
		institution: 'Leopardus - Freelance',
		startAt: new Date(2022, 9),
		endAt: new Date(2022, 9),
		description: faker.lorem.paragraph(2),
	},
	{
		title: 'Full-stack Developer',
		institution: 'Biodinâmica Saúde',
		startAt: new Date(2021, 9),
		endAt: new Date(2022, 4),
		description: faker.lorem.paragraph(2),
	},
	{
		title: 'Front-end Senior Developer',
		institution: 'Trinca',
		startAt: new Date(2019, 0),
		endAt: null,
		description: faker.lorem.paragraph(2),
	},
]

export const education: AcademicAndWork[] = [
	{
		title: 'Imagine CUP',
		institution: 'PUC',
		startAt: new Date(2016, 9),
		endAt: new Date(2021, 5),
		description: 'Lorem ipsum',
	},
	{
		title: 'Systems Analysis and Development',
		institution: 'Senac',
		startAt: new Date(2015, 9),
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
	source: string
	website: string
}

export const projects: Project[] = [
	{
		title: 'Project 1',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
		source: 'github.com',
		website: 'website.com',
	},
	{
		title: 'Project 2',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
		source: 'github.com',
		website: 'website.com',
	},
]
