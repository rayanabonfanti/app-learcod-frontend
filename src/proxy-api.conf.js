const PROXY_CONFIG_API = [

    {
        context: ['/api'],
        target: 'https://apigwhml.applearcod.net/',
        secure: false,
        loglevel: 'debug',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG_API