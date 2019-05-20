// eslint-disable-next-line react/no-typos
const {
    override,
    disableEsLint,
    addDecoratorsLegacy,
    fixBabelImports,
    addLessLoader
} = require("customize-cra");

module.exports = override(
    addDecoratorsLegacy(),
    disableEsLint(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);