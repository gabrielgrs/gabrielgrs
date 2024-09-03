import { Texts } from './type'

export const en: Texts = {
	navbar: {
		email: 'Email',
		resume: 'Resume',
		github: 'Github',
		linkedin: 'LinkedIn',
		language: 'pt',
		theme: 'light',
	},
	main: {
		greeting: 'Hello, I am Gabriel',
		job: 'Digital Craftsman',
		scroll: 'Scroll down',
	},
	about: {
		title: 'About',
		description: 'Technologies, innovation, entrepreneurship, and front-end engineer',
	},
	professional: {
		title: 'Professional',
		list: [
			{
				role: 'Intern',
				company: 'Stefanini IT',
				startAt: new Date(2017, 1),
				endAt: new Date(2018, 8),
				description:
					'Developed a state government system for law enforcement and sanctioning using VB.Net, contributing to a project that had a direct impact on legislative management.',
			},
			{
				role: 'Mid-level Full-stack Developer',
				company: 'Stefanini IT',
				startAt: new Date(2018, 8),
				endAt: new Date(2018, 12),
				description:
					'Worked on the development of course management systems for the state government using Node.js and Angular.js, and later participated in internal company projects with Node.js and React.',
			},
			{
				role: 'Senior Full-stack Developer',
				company: 'Biodinâmica Saúde',
				startAt: new Date(2018, 9),
				endAt: new Date(2019, 4),
				description:
					'Developed internal systems for medical appointment management, virtual assistance, and financial control using Node.js and Next.js, bringing operational efficiency to medical and administrative processes.',
			},
			{
				role: 'Senior Front-end Developer',
				company: 'Trinca',
				startAt: new Date(2019, 0),
				endAt: null,
				description:
					'Started as a mobile and full-stack developer, but quickly transitioned to front-end development, initially working with React and Redux, and later focusing exclusively on Next.js to build scalable and dynamic interfaces.',
			},
		],
	},
	academic: {
		title: 'Academic',
		list: [
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
		source: 'Source',
		website: 'Website',
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
		list: [
			'Next',
			'React',
			'Typescript',
			'Tailwind',
			'Jest',
			'MongoDB',
			'PostgreSQL',
			'Vim',
			'Neovim',
			'VSCode',
			'Git',
			'Azure',
			'Figma',
		],
	},
	contact: {
		title: 'Contact',
		text: 'Say hello',
		address: 'Florianopolis, Brazil',
	},
	buyMeCoffee: 'Buy me a coffee',
	footer: {
		start: 'Developed by',
		end: 'with love',
	},
}
