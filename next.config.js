/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: false
	},
	images: {
		domains: [
			'www.datocms-assets.com',
		]
	},
}

module.exports = nextConfig
