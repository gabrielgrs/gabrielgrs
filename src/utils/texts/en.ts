import { Texts } from './type'

export const en: Texts = {
	navbar: {
		email: 'Email',
		github: 'Github',
		linkedin: 'LinkedIn',
		language: 'pt',
		theme: 'light',
	},
	main: {
		greeting: 'Hello, I am Gabriel',
		job: 'Digital Craftsman',
		description: 'Technologies, innovation, entrepreneurship, and front-end engineer',
		scroll: 'Scroll down',
	},
	professional: {
		title: 'Professional',
		list: [
			{
				role: 'Intern',
				company: 'Stefanini IT',
				startAt: new Date(2017, 1),
				endAt: new Date(2018, 8),
				description: '',
			},
			{
				role: 'Mid-level full-stack developer',
				company: 'Stefanini IT',
				startAt: new Date(2018, 8),
				endAt: new Date(2018, 12),
				description: '',
			},
			{
				role: 'Freelance developer',
				company: 'Leopardus',
				startAt: new Date(2022, 9),
				endAt: new Date(2022, 9),
				description: '',
			},
			{
				role: 'Senior full-stack developer',
				company: 'Biodinâmica Saúde',
				startAt: new Date(2021, 9),
				endAt: new Date(2022, 4),
				description: '',
			},
			{
				role: 'Senior front-end developer',
				company: 'Trinca',
				startAt: new Date(2019, 0),
				endAt: null,
				description: '',
			},
			{
				role: 'Freelance developer',
				company: 'Psiseguro',
				startAt: new Date(2023, 10),
				endAt: null,
				description: '',
			},
		],
	},
	academic: {
		title: 'Academic',
		list: [
			{
				title: 'Microsoft Academy',
				institution: 'PUC',
				startAt: new Date(2016, 9),
				endAt: new Date(2021, 5),
			},
			{
				title: 'Systems analysis and development',
				institution: 'Senac',
				startAt: new Date(2015, 9),
				endAt: new Date(2021, 5),
			},
			{
				title: 'MBA - Software Engineering',
				institution: 'FIAP',
				startAt: new Date(2018, 9),
				endAt: new Date(2021, 5),
			},
		],
	},
	projects: {
		title: 'Projects',
		list: [
			{
				title: 'Project 1',
				description:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
				source: 'github.com',
				website: 'website.com',
			},
			{
				title: 'Project 2',
				description:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
				source: 'github.com',
				website: 'website.com',
			},
		],
	},
	skills: {
		title: 'Skills',
		list: ['Vim', 'Neovim', 'VSCode', 'React', 'Next', 'Typescript', 'Tailwind', 'Git', 'Azure', 'Figma'],
	},
	contact: {
		title: 'Say hello',
	},
	buyMeCoffee: 'Buy me a coffee',
	footer: {
		start: 'Developed by',
		end: 'with love',
	},
}
