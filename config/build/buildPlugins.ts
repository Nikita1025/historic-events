import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
