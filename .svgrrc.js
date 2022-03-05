const path = require('path');

module.exports = {
  native: true,
  typescript: true,
  memo: true,
  outDir: 'lib/icons',
  ext: 'tsx',
  svgProps: {
    width: 32,
    height: 32,
  },
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      const exportName = /^\d/.test(basename) ? `_${basename}` : basename;
      return `export { default as ${exportName.toUpperCase()} } from './${basename}'`;
    });
    return exportEntries.join('\n');
  },
};
