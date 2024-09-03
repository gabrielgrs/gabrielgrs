import { en } from './en'
import { Texts } from './type'

export const pt: Texts = {
	navbar: {
		resume: 'Currículo',
		email: 'E-mail',
		github: 'Github',
		linkedin: 'LinkedIn',
		language: 'en',
		theme: 'luz',
	},
	main: {
		greeting: 'Olá, eu sou o Gabriel',
		job: 'Digital Craftsman',
		scroll: 'Role para baixo',
	},
	about: {
		title: 'Sobre',
		description: 'Tecnologias, inovação, empreendedorism e engenheiro de front-end',
	},
	professional: {
		title: 'Profissional',
		list: [
			{
				role: 'Estagiário',
				company: 'Stefanini IT',
				startAt: new Date(2017, 1),
				endAt: new Date(2018, 8),
				description:
					'Desenvolvi um sistema do governo estadual sobre o sansionamento de leis utilizando VB.Net, colaborando em um projeto que impactou diretamente na gestão legislativa.',
			},
			{
				role: 'Desenvolvedor full-stack pleno',
				company: 'Stefanini IT',
				startAt: new Date(2018, 8),
				endAt: new Date(2018, 12),
				description:
					'Atuei no desenvolvimento de sistemas de controle de cursos para o governo estadual, utilizando Node.js e Angular.js, e posteriormente trabalhei em projetos internos da empresa com Node.js e React.',
			},
			{
				role: 'Desenvolvedor sênior full-stack',
				company: 'Biodinâmica Saúde',
				startAt: new Date(2021, 9),
				endAt: new Date(2022, 4),
				description:
					'Desenvolvi sistemas internos de controle de atendimentos médicos, atendimento virtual e controle financeiro, utilizando Node.js e Next.js, trazendo maior eficiência operacional para os processos médicos e administrativos.',
			},
			{
				role: 'Desenvolvedor sênior front-end',
				company: 'Trinca',
				startAt: new Date(2019, 0),
				endAt: null,
				description:
					'Comecei como desenvolvedor mobile e full-stack, mas rapidamente mudei para o front-end, inicialmente com React e Redux, e depois focando exclusivamente em Next.js para o desenvolvimento de interfaces dinâmicas e escaláveis.',
			},
		],
	},
	academic: {
		title: 'Academico',
		list: [
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
		source: 'Código',
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
		title: 'Habilidades',
		list: en.skills.list,
	},
	contact: {
		title: 'Contato',
		text: 'Diga olá',
		address: 'Florianópolis, Brasil',
	},
	buyMeCoffee: en.buyMeCoffee,
	footer: {
		start: 'Desenvolvido por',
		end: 'com amor',
	},
}
