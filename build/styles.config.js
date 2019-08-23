const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = ({ mode, out }) => ({
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    }
                },
                'postcss-loader',
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: out }),
    ],
    optimization: {
        minimizer: mode === 'development' 
            ? []
            : [new OptimizeCSSAssetsPlugin({})],
    }
});