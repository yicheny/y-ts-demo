const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  coverageProvider: "v8",
  moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths),
  preset:'ts-jest/presets/js-with-ts',
  testEnvironment: "node",
  testPathIgnorePatterns:["node_modules",".js"]
};