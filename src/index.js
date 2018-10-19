module.exports = function exportES6(exportedModule, commonjsExports) {
  if (!commonjsExports.__esModule) {
    commonjsExports = { default: commonjsExports };
  }
  Object.defineProperty(exportedModule.exports, '__esModule', {
    value: true
  });
  exportedModule.exports = commonjsExports;
  return exportedModule.exports;
};
