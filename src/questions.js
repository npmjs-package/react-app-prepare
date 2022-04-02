import inquirer from 'inquirer'
import { defaultTemplate, defaultTool, templates, tools } from './data'

export async function promptForMissingOptions(options) {
	const questions = []

	if (!options.projectName) {
		questions.push({
			type: 'input',
			name: 'projectName',
			message: 'Project name:',
			default: 'my-react-app',
		})
	}

	if (!options.template) {
		questions.push({
			type: 'list',
			name: 'template',
			message: 'Please choose which project template to use',
			choices: templates,
			default: defaultTemplate,
		})
	}

	if (!options.tool) {
		questions.push({
			type: 'confirm',
			name: 'tool',
			message: 'Use redux for state management?',
			default: true,
		})
	}

	const answers = await inquirer.prompt(questions)

	return {
		...options,
		projectName: options.projectName || answers.projectName,
		template: options.template || answers.template,
		tool: options.tool || (answers.tool ? 'redux' : 'none'),
	}
}
