/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.pinimg.com"
            }
        ]
    }
}

module.exports = nextConfig
