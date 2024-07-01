import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'tetra3d-tall-three.js',
		color: '#0000ff',
		description:
			'Tetra3D is an innovative art museum platform, allowing users to explore and customize 3D spaces. Admin users can manage virtual tours by uploading 3D models of spaces and sculptures, as well as 2D images. Regular users can navigate through these spaces, decorate them with images and sculptures, and create personalized exhibitions for others to view and enjoy. This platform merges the interactive experience of a virtual museum with the creative freedom of personal art curation.',
		shortDescription:
			'Customizable Interactive 3D Art Museum Experience',
		links: [{ to: 'https://app.tetra3d.com', label: 'WebSite' }],
		logo: Assets.Tetra,
		name: 'Tetra3D',
		period: {
			from: new Date(2023, 10, 1), to: new Date(2024, 4, 30)
		},
		skills: getSkills('three.js', 'tailwind', 'laravel', 'krpano'),
		type: 'Art Museum'
	},
	{
		slug: 'fifa-collect-web3-next',
		color: '#00ff00',
		description:
			'- Create your account and sign up to begin your FIFA Collect journey. \n' +
			'- Once you’ve selected your packs and scored your breathtaking moments, view and enjoy the collectibles you have landed, or trade and sell them on the designed FIFA Collect marketplace. \n' +
			'- Compete with your collectibles in upcoming quests to win unforgettable rewards and grow your collection even more. ',
		shortDescription:
			'Access and own, collect and trade, to enjoy a new kind of fandom.',
		links: [{ to: 'https://collect.fifa.com', label: 'WebSite' }],
		logo: Assets.FifaCollect,
		name: 'FIFA Collect',
		period: {
			from: new Date(2023, 1, 1), to: new Date(2023, 6, 30)
		},
		skills: getSkills('next', 'tailwind', 'fastify', 'solidity', 'firebase', 'ts', 'postgres'),
		type: 'NFT MarketPlace'
	},
	{
		slug: 'meet-cody-flask-opneai',
		color: '#5e95e3',
		description:
			'Cody is an intelligent AI assistant like ChatGPT with the added benefit of being able to train it on your business, your team, your processes, and your clients with your own knowledge base. Use Cody as an employee to support your team, answer questions, help with creative work, troubleshoot issues, and brainstorm ideas.',
		shortDescription:
			'Boost Your Teams Productivity With AI',
		links: [{ to: 'https://meetcody.ai', label: 'WebSite' }],
		logo: Assets.Cody,
		name: 'MeetCody',
		period: {
			from: new Date(2022, 9, 1), to: new Date(2023, 0, 30)
		},
		skills: getSkills('python', 'flask', 'chatgpt'),
		type: 'AI Assistance'
	},
	{
		slug: 'playzelo-MERN-web3',
		color: '#ff0000',
		description:
			"Online casinos haven't always existed, but it's safe to say that since their introduction to the market, they have gained immense popularity. There's no shortage of online casino options, and in 2022, there are thousands to choose from. It all comes down to your preferences and the payment methods you prefer to find at a casino. Players are constantly on the lookout for something new that can enhance the gaming experience, making it more enjoyable and accessible. This allows players to fully immerse themselves in the excitement of the casino, focusing on the games themselves.",
		shortDescription:
			'Crypto Online Casino Game Platform',
		links: [{ to: 'https://playzelo.xyz', label: 'WebSite' }],
		logo: Assets.PlayZelo,
		name: 'PlayZelo',
		period: {
			from: new Date(2022, 2, 1), to: new Date(2022, 8, 28)
		},
		skills: getSkills('reactjs', 'ts', 'tailwind', 'nodejs', 'solidity'),
		type: 'Crypto Online Casino',
	}
];

export const title = 'Projects';