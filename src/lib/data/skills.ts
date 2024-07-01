import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'SASS',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: 'Tailewind',
		logo: Assets.Tailwind,
		name: 'TailwindCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React.js',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Backend library',
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'chatgpt',
		color: 'grey',
		description: 'OpenAI Model',
		logo: Assets.ChatGPT,
		name: 'ChatGPT',
		category: 'library'
	}),
	defineSkill({
		slug: 'three.js',
		color: 'grey',
		description: 'Three.js',
		logo: Assets.ThreeJs,
		name: 'Three.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'next',
		color: 'grey',
		description: 'TypeScript based UI framework',
		logo: Assets.Next,
		name: 'Next.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: 'Vue.js',
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'fastify',
		color: 'blue',
		description: 'Fastify',
		logo: Assets.Fastify,
		name: 'Fastify',
		category: 'library'
	}),
	defineSkill({
		slug: 'shadcn',
		color: 'grey',
		description: 'ShadCN',
		logo: Assets.ShadCN,
		name: 'SharCN',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description: 'CSharp',
		logo: Assets.Csharp,
		name: 'CSharp',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description: 'FireBase',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'other'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: 'Redis',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'other'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: 'Laravel',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'library'
	}),
	defineSkill({
		slug: 'solidity',
		color: 'grey',
		description: 'Solidity',
		logo: Assets.Solidity,
		name: 'Solidity',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'other'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'blue',
		description: 'PostgreSQL',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'other'
	}),
	defineSkill({
		slug: 'unity',
		color: 'grey',
		description: 'Unity',
		logo: Assets.Unity,
		name: 'Unity',
		category: 'library'
	}),
	defineSkill({
		slug: 'flask',
		color: 'grey',
		description: 'Flask',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'library'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
