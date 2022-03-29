import { updateOptions } from "./functions";
import { initiateValidation } from "./validation";

export async function createProject(options) {
	options = await updateOptions(options);
	await initiateValidation(options);
	console.log(options);
}
