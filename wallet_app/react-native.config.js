module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
  devServer: {
    proxy: {
      '/*': {
        target: `http://192.168.0.107:5000`,
      },
    },
  },
  dependencies: {},
};
