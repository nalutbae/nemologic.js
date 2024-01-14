module.exports = {
  moduleNameMapper: {
    "^\\.\\/output\\.handler$": "<rootDir>/src/output.handler.js",
    "^\\.\\/nemologic\\.solver$": "<rootDir>/src/nemologic.solver.js",
    // 다른 모듈 경로도 필요한 경우 여기에 추가할 수 있습니다.
  },
  // 나머지 Jest 설정...
};
