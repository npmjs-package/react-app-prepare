export async function updateOptions(options) {
	return {
		...options,
		template: options.template.toLowerCase(),
		tool: options.tool.toLowerCase(),
	};
}
