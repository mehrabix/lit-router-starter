/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/main.ts',
  mode: 'development',
  devtool: 'eval-source-map',
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
    filename: '[name].js',
  },
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