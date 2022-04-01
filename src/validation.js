import validateProjectName from 'validate-npm-package-name'
import { templates, tools } from './data'
import fs from 'fs'

import {
	directoryNotEmpty,
	invalidProjectName,
	invalidTemplateSelected,
	invalidToolSelected,
} from './logs'

async function checkProjectName(projectName) {
	const validationResult = validateProjectName(projectName)
	if (!validationResult.validForNewPackages) {
		invalidProjectName(projectName, validationResult)
		process.exit(1)
	}
}

async function checkSelectedTemplate(templateName) {
	if (!templates.map((x) => x.toLowerCase()).includes(templateName)) {
		invalidTemplateSelected(templateName)
		process.exit(1)
	}
}

async function checkSelectedTool(toolName) {
	if (!tools.map((x) => x.toLowerCase()).includes(toolName)) {
		invalidToolSelected(toolName)
		process.exit(1)
	}
}

async function checkDirectory(options) {
	if (!fs.existsSync(options.targetDirectory)) {
		fs.mkdirSync(options.targetDirectory)
	} else {
		const dirData = fs.readdirSync(options.targetDirectory)
		if (dirData.length > 0) {
			directoryNotEmpty(options.projectName)
			process.exit(1)
		}
	}
}

export async function initiateValidation(options) {
	await checkProjectName(options.projectName)
	await checkSelectedTemplate(options.template)
	await checkSelectedTool(options.tool)
	await checkDirectory(options)
}
