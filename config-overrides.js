const { addBabelPlugin, override } = require('customize-cra');

// Agora vai poder fazer importações direto da pasta src
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
