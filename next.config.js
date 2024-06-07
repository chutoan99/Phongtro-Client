const path = require('path')

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'style')]
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: ['graphql-tag/loader']
		})
		return config
	}
}
