import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Information Technology and Systems',
		description: '',
		location: 'Kyoto, Japan',
		logo: Assets.Kyoto,
		name: '',
		organization: 'Kyoto University',
		period: { from: new Date(2015, 8, 1), to: new Date(2019, 2, 30) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'C++', 'C#', 'Algorithm', 'Algebra', 'Python', 'Java', 'JavaScript', 'English', ]
	},
];

export const title = 'Education';
