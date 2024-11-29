import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders.ts';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        fontLoader,
        svgLoader,
        fileLoader,
    ];
}
