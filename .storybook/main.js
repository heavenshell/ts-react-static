const TsConfigWebpackPlugin = require('ts-config-webpack-plugin')

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    'storycap/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async(config, {configType}) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    )
    config.plugins.push(new TsConfigWebpackPlugin())
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')
    return config
  }
}
