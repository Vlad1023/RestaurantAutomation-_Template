const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@components', path.resolve('src/components/'))
      .set('@assets', path.resolve('src/assets/'))
      .set('@router', path.resolve('src/router/'))
      .set('@store', path.resolve('src/store/'))
  }
};
