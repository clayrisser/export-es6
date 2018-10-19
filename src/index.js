module.exports = function exportES6(commonjsModule) {
  if (!commonjsModule.__esModule) {
    commonjsModule = {
      default: commonjsModule,
      __esModule: true
    };
  }
  return commonjsModule;
};
