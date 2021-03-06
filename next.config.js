const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withFonts(
  withCSS(
    withImages(
      withSass({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader'
            }
          });
          config.plugins.push(new Dotenv({ silent: true }));

          return config;
        }
      })
    )
  )
);

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://hhyemi.github.io/hyemi-portfolio' : ''
};
