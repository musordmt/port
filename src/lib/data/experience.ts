import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-stack-webgl-webgl',
		company: 'NovaConcepts',
		description: '- Completely created a website for Sculptures and Photos from A to Z (Tetra3D). \n' +
			'- Developed 3D Virtual Store with Next.js, Three.js for a new feature. \n' +
			'- Developed Casino Game Platform using React.js, Pixi, Node.js, MongoDB and WebSocket (PlayZelo). \n' +
			'- Integrated crypto payment gateway for player financial management using Tatum.io and Binance API. \n' +
			'- ChatGPT Integration and Training ChatGPT From PDF and Voice. \n' +
			'- Suggested new practices for enhancements of software development quality',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023, 7, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'next', 'three.js', 'chatgpt', 'laravel', 'nodejs', 'fastify'),
		name: 'Full-Stack and WebGL Developer',
		color: 'red',
		links: [],
		logo: Assets.Nova,
		shortDescription: ''
	},
	{
		slug: 'full-stack-contract',
		company: 'Motley Agency',
		description: '- Developed interactive 3D web applications, 3D Visualization, 3D Web Games using React.js, Vue.js, Three.js, Unity3D framework. \n' +
			'- Implemented complex 3D animations and visual effects using shaders and WebGL. \n' +
			'- Optimized performance by utilizing efficient rendering techniques and minimizing resource usage. \n' +
			'- Built a dynamic web application using Node.js, Laravel, and React.js frameworks. \n' +
			'- Developed 2D web games using HTML5 game engines like Phaser, Pixi and Cocos2D.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2020, 9, 1), to: new Date(2023, 5, 30) },
		skills: getSkills('vue', 'ts', 'css', 'html', 'tailwind', 'js', 'three.js', 'unity', 'solidity', 'shadcn'),
		name: 'Full-Stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Motley,
		shortDescription: ''
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: '- Developed a delivery logistics platform using React.js, Javascript, HTML, CSS, jQuery, Websocket, etc. \n' +
			'- Implemented AI features and modifications for the existing codebase. \n' +
			'- Participated in the incorporation of AI software for finding patterns. \n' +
			'- Migrated web pages in PHP into Vue.js Implemented real-time location tracking using google maps and web socket.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2019, 5, 1), to: new Date(2020, 9, 1) },
		skills: getSkills('css', 'html', 'js', 'ts', 'laravel', 'reactjs', 'nodejs', 'python'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Upwork,
		shortDescription: ''
	}
];

export const title = 'Experience';
