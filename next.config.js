/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images:{
		domains:['rb.gy','logo-download.com']
	}
}

module.exports = nextConfig
