module.exports = function exportES6(exportedModule, commonjsModule) {
  Object.defineProperty(exportedModule, '__esModule', {
    value: true
  });
  exportedModule.exports = commonjsModule;
  return commonjsModule;
};
