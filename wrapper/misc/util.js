module.exports = {
	xmlFail(message = "R.I.P that voice is not available") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
