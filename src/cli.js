import arg from "arg";
import { createProject } from "./main";
import { promptForMissingOptions } from "./questions";

export const templates = ["Javascript", "Typescript"];
export const defaultTemplate = "Javascript";
export const tools = ["None", "Redux", "Mobx"];
export const defaultTool = "None";

function parseArgumentsIntoOptions(rowArgs) {
	const args = arg(
		{
			"--template": String,
			"-t": "--template",
			"--tool": String,
		},
		{
			argv: rowArgs.slice(2),
		},
	);
	return {
		projectName: args._[0],
		template: args["--template"],
		tool: args["--tool"],
	};
}

export async function cli(args) {
	let options = parseArgumentsIntoOptions(args);
	options = await promptForMissingOptions(options);
	await createProject(options);
}
