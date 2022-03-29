import chalk from "chalk";

export function invalidProjectName(projectName, validationResult) {
	console.error(
		chalk.red(
			`\nCannot create a project named ${chalk.green(
				`"${projectName}"`,
			)} because of npm naming restrictions:\n`,
		),
	);
	[...(validationResult.errors || []), ...(validationResult.warnings || [])].forEach((error) => {
		console.error(chalk.red(`  * ${error}`));
	});
	console.error(chalk.red("\nPlease choose a different project name."));
}

export function invalidTemplateSelected(templateName) {
	console.error(chalk.red(`\n${chalk.green(`"${templateName}"`)} is not a valid template name.`));
	console.error(
		`\n${chalk.green(`"javascript"`)} and ${chalk.green(
			`"typescript"`,
		)} are the templates you can use.\n`,
	);
}

export function invalidToolSelected(toolName) {
	console.error(
		chalk.red(`\n${chalk.green(`"${toolName}"`)} is not a valid state management tool.`),
	);
	console.error(
		`\n${chalk.green(`"redux"`)} and ${chalk.green(`"mobx"`)} are the templates you can use.\n`,
	);
	console.error(
		`You can select ${chalk.green(`"none"`)} if you don't want to use any state management tool.`,
	);
}