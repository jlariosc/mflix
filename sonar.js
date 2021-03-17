const scanner = require("sonarqube-scanner")

scanner(
  {
    serverUrl: "http://sonar-qube-jlarios.northeurope.cloudapp.azure.com",
    token: "88914e8efd509f185c0035b2ae7f1c84ff5075b5",
    options: {
      "sonar.projectName": "Mflix",
      "sonar.projectDescription": "Mflix app in nodejs",
      "sonar.sources": "src",
      "sonar.tests": "test",
      "sonar.javascript.coveragePlugin": "lcov",
      "sonar.javascript.lcov.reportPaths": "output/coverage/jest/lcov.info",
    },
  },
  () => process.exit(),
)
