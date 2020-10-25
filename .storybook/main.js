module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-notes/register',
  ],
  stories: ['../src/**/*.stor{ies,y}.{t,j}sx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
