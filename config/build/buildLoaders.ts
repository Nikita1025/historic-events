import { ModuleOptions } from 'webpack';

export function buildLoaders(): ModuleOptions['rules'] {
  return [
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(s[ac]ss|less|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ];
}
