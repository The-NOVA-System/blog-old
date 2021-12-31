module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{js,css,png,jpg,html,json,md,xml}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};