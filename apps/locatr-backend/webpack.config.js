const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const path = require('path');

const workspaceRoot = path.join(__dirname, '../..');

module.exports = {
  output: {
    path: path.join(__dirname, '../../dist/apps/locatr-backend'),
    devtoolModuleFilenameTemplate: (info) => {
      const rel = path.relative(workspaceRoot, info.absoluteResourcePath);
      return `webpack:///./${rel}`;
    },
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      generatePackageJson: true,
      outputHashing: 'none',
      sourceMap: true,
    }),
  ],
};
