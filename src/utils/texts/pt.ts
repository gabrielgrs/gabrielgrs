import { Texts } from './type'

export const pt: Texts = {
	navbar: {
		email: 'E-mail',
		github: 'Github',
		linkedin: 'LinkedIn',
		language: 'en',
		theme: 'luz',
	},
	main: {
		greeting: 'Olá, eu sou o Gabriel',
		job: 'Digital Craftsman',
		description: 'Tecnologias, inovação, empreendedorism e engenheiro de front-end',
		scroll: 'Role para baixo',
	},
	professional: {
		title: 'Profissional',
		list: [
			{
				role: 'Estagiário',
				company: 'Stefanini IT',
				startAt: new Date(2017, 1),
				endAt: new Date(2018, 8),
				description: '',
			},
			{
				role: 'Desenvolvedor full-stack pleno',
				company: 'Stefanini IT',
				startAt: new Date(2018, 8),
				endAt: new Date(2018, 12),
				description: '',
			},
			{
				role: 'Desenvolvedor freelancer',
				company: 'Leopardus',
				startAt: new Date(2022, 9),
				endAt: new Date(2022, 9),
				description: '',
			},
			{
				role: 'Desnvolvedor senior full-stack',
				company: 'Biodinâmica Saúde',
				startAt: new Date(2021, 9),
				endAt: new Date(2022, 4),
				description: '',
			},
			{
				role: 'Desenvolvedor senior front-end',
				company: 'Trinca',
				startAt: new Date(2019, 0),
				endAt: null,
				description: '',
			},
			{
				role: 'Desenvolvedor freelancer',
				company: 'Psiseguro',
				startAt: new Date(2023, 10),
				endAt: null,
				description: '',
			},
		],
	},
	academic: {
		title: 'Academico',
		list: [
			{
				title: 'Microsoft Academy',
				institution: 'PUC',
				startAt: new Date(2016, 9),
				endAt: new Date(2021, 5),
			},
			{
				title: 'Análise e desenvolvimento de sistemas',
				institution: 'Senac',
				startAt: new Date(2015, 9),
				endAt: new Date(2021, 5),
			},
			{
				title: 'MBA - Engenharia de software',
				institution: 'FIAP',
				startAt: new Date(2018, 9),
				endAt: new Date(2021, 5),
			},
		],
	},
	projects: {
		title: 'Projetos',
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
		title: 'Habilidades',
		list: ['Vim', 'Neovim', 'VSCode', 'React', 'Next', 'Typescript', 'Tailwind', 'Git', 'Azure', 'Figma'],
	},
	contact: {
		title: 'Diga olá',
	},
	buyMeCoffee: 'Buy me a coffee',
	footer: {
		start: 'Desenvolvido por',
		end: 'com amor',
	},
}
