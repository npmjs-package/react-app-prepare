import { copyTemplateFiles, createPackageJson, updateOptions } from "./functions";
import { initiateValidation } from "./validation";

export async function createProject(options) {
	options = await updateOptions(options);
	await initiateValidation(options);
	await createPackageJson(options);
	await copyTemplateFiles(options);
}
