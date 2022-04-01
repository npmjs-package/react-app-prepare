export const templates = ['Javascript', 'Typescript']
export const defaultTemplate = 'Javascript'
export const tools = ['None', 'Redux', 'Mobx']
export const defaultTool = 'None'
export const packageJson = {
	name: 'my-react-app',
	version: '1.0.0',
	description: 'Basic react app setup',
	private: true,
	scripts: {
		start: 'react-scripts start',
		build: 'react-scripts build',
		test: 'react-scripts test',
		eject: 'react-scripts eject',
	},
	dependencies: {},
	devDependencies: {},
	eslintConfig: {
		extends: ['react-app', 'react-app/jest'],
	},
	browserslist: {
		production: ['>0.2%', 'not dead', 'not op_mini all'],
		development: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'],
	},
}
export const dependencies = {
	'@reduxjs/toolkit': '^1.8.0',
	'@testing-library/jest-dom': '^5.16.3',
	'@testing-library/react': '^12.1.4',
	'@testing-library/user-event': '^14.0.0',
	'@types/jest': '^27.4.1',
	'@types/node': '^17.0.23',
	'@types/react': '^17.0.43',
	'@types/react-dom': '^17.0.14',
	mobx: '^6.5.0',
	'mobx-react': '^7.3.0',
	react: '^17.0.2',
	'react-dom': '^17.0.2',
	'react-redux': '^7.2.6',
	'react-scripts': '^5.0.0',
}
export const devDependencies = {
	'@typescript-eslint/eslint-plugin': '^5.17.0',
	'@typescript-eslint/parser': '^5.17.0',
	eslint: '^8.12.0',
	'eslint-plugin-react': '^7.29.4',
	typescript: '^4.6.3',
}

const defaultDependencies = [
	'@testing-library/jest-dom',
	'@testing-library/react',
	'@testing-library/user-event',
	'react',
	'react-dom',
	'react-scripts',
	'eslint',
	'eslint-plugin-react',
]

export const dependencyList = {
	none: [],
	javascript: defaultDependencies,
	typescript: [
		...defaultDependencies,
		'@types/jest',
		'@types/node',
		'@types/react',
		'@types/react-dom',
		'typescript',
		'@typescript-eslint/eslint-plugin',
		'@typescript-eslint/parser',
	],
	redux: ['@reduxjs/toolkit', 'react-redux'],
	mobx: ['mobx', 'mobx-react'],
}
