const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias["@mixins"] = path.join(
            __dirname,
            "src/shared/scss/mixins/index.scss"
        );
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
