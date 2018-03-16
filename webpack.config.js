module.exports = {
    entry: './lib/api.ts',
    target: 'node',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [{ test: /\.ts?$/, loader: 'ts-loader' }]
    }
};
