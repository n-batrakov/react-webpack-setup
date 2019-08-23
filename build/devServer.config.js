const url = require('url');

const devServer = url.parse('http://localhost:8080');
const apiServer = url.parse('http://localhost:8081');

const config = {
    host: devServer.hostname,
    port: devServer.port,
    sockHost: devServer.hostname,
    sockPort: devServer.port,
    disableHostCheck: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },

    proxy: {
        '/api': {
            target: apiServer.href,
        },
    },
};

module.exports = ({ mode }) => ({
    devServer: mode === 'development' ? config : undefined
});