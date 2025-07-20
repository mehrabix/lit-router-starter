import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if we're in development mode (when running rspack serve)
const isDevelopment = process.argv.includes('serve') || process.env.NODE_ENV === 'development';
const isProduction = process.argv.includes('build') || process.env.NODE_ENV === 'production';

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/main.ts',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: false,
                decorators: true,
              },
              transform: {
                legacyDecorator: true,
                decoratorMetadata: true,
              },
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    filename: isProduction ? '[name].[contenthash].js' : '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: isProduction,
  },
  optimization: isProduction ? {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  } : undefined,
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: './',
    },
  },
};

export default config; 