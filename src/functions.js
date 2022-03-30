import path from "path";
import fs from "fs";
import { dependencies, dependencyList, devDependencies, packageJson } from "./data";
import { ncp } from "ncp";
import { promisify } from "util";

const copy = promisify(ncp);

export async function copyTemplateFiles(options) {
	if (options.tool !== "none") {
		await copy(options.toolsDirectory, options.targetDirectory, {
			clobber: false,
		});
	}
	await copy(options.templateDirectory, options.targetDirectory, {
		clobber: false,
	});
	await copy(options.boilerplateDirectory, options.targetDirectory, {
		clobber: false,
	});
}

async function generateDirectoryPath(options) {
	return {
		targetDirectory: path.join(process.cwd(), options.projectName),
		boilerplateDirectory: path.resolve(__dirname, "../packages/boilerplate"),
		templateDirectory: path.resolve(__dirname, "../packages/templates", options.template),
		toolsDirectory: path.resolve(__dirname, "../packages/tools", options.template, options.tool),
	};
}

export async function updateOptions(options) {
	options = {
		...options,
		template: options.template.toLowerCase(),
		tool: options.tool.toLowerCase(),
	};

	return {
		...options,
		...(await generateDirectoryPath(options)),
	};
}

export async function createPackageList(options) {
	const packageList = {
		dependencies: {},
		devDependencies: {},
	};
	const requiredPackages = [...dependencyList[options.template], ...dependencyList[options.tool]];
	Object.keys(dependencies).forEach((packageName) => {
		if (requiredPackages.includes(packageName)) {
			packageList.dependencies[packageName] = dependencies[packageName];
		}
	});
	Object.keys(devDependencies).forEach((packageName) => {
		if (requiredPackages.includes(packageName)) {
			packageList.devDependencies[packageName] = devDependencies[packageName];
		}
	});
	return packageList;
}

export async function createPackageJson(options) {
	const packageList = await createPackageList(options);

	const data = packageJson;
	data.dependencies = packageList.dependencies;
	data.devDependencies = packageList.devDependencies;
	data.name = options.projectName;

	const fileName = path.join(options.targetDirectory, "package.json");
	fs.writeFileSync(path.join(fileName), JSON.stringify(data, null, 2));
}
