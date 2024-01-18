module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // ... presets settings goes here
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src',
          },
        },
      ],
    ],
  };
};
