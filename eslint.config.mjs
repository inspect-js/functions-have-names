import ljharbConfig from '@ljharb/eslint-config/flat';

export default [
	...ljharbConfig,
	{
		rules: {
			'func-name-matching': ['error', 'always'],
			'id-length': 'warn',
		},
	},
	{
		files: ['test/**'],
		rules: {
			'func-name-matching': 'off',
		},
	},
];
