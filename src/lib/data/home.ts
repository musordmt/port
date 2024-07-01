import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Jurij';

export const lastName = 'Galasevic';

export const description =
	'This is Full-Stack & WebGL Developer with over 5 years of experience in developing web, mobile applications and web3 solutions. Proficient in using various front-end and back-end technologies, including JS, TS, React.js, Vue.js, Node.js, Laravel, Three.js, OpenAI, and Web3.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/musordmt' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/jurij-galasevic-mdc'
	},
	{
		platform: Platform.Email,
		link: 'musordmt@proton.me'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'ts', 'next', 'vue', 'laravel', 'three.js', 'chatgpt');
