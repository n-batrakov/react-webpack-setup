const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { src, dist } = require('./build/directories')(__dirname);
const typescript = require('./build/typescript.config');
const styles = require('./build/styles.config');
const devServer = require('./build/devServer.config');

const mode = process.env.NODE_ENV || 'development';
console.log(`BUILD STARTED IN '${mode}' MODE\n`);

module.exports = merge(
    typescript({ mode, modules: [src()] }),
    styles({ mode, out: 'index.css' }),
    devServer({ mode }),
    {
        mode,
        entry: {
            index: src('index.tsx'),
        },
        output: {
            path: dist(),
            filename: '[name].js'
        },
        plugins: [
            new CopyWebpackPlugin([{ from: src('public'), to: '' }]),
        ],
    },
);
