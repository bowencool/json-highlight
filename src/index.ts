export default function(json: any): string {
	if (!json) return '';
	if (typeof json !== 'string') {
		json = JSON.stringify(json, null, 2);
	}
	// json = escapeHtml(json);
	// const colors = Object.assign({}, defaultColors, colorOptions);
	return json.replace(
		/("(\\u[a-zA-Z0-9]{4,5}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
		(match: string) => {
			if (/^(".+):$/.test(match)) {
				return `<span class="json-key">${RegExp.$1}</span>:`;
			}
			let type = 'number';
			if (/true|false/.test(match)) {
				type = 'boolean';
			}
			if (/null/.test(match)) {
				type = 'null';
			}
			if (/^".+"$/.test(match)) {
				type = 'string';
			}
			return `<span class="json-${type}">${match}</span>`;
		}
	);
}
