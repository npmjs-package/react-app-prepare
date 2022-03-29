import { copyTemplateFiles, createPackageJson, updateOptions } from "./functions";
import { initiateValidation } from "./validation";
import Listr from "listr";
import { successLog } from "./logs";

async function executeTasks(options) {
	const tasks = new Listr([
		{
			title: "Perform validations",
			task: async () => {
				await initiateValidation(options);
			},
		},
		{
			title: `Create template of react with ${options.template}`,
			task: async () => {
				await createPackageJson(options);
			},
		},
		{
			title: "Copy template files",
			task: async () => {
				await copyTemplateFiles(options);
			},
		},
	]);
	await tasks.run();
}
export async function createProject(options) {
	options = await updateOptions(options);
	await executeTasks(options);
	successLog(options.projectName);
}
