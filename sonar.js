const scanner = require('sonarqube-scanner');

scanner(
        {
        serverUrl : 'SONAR_HOST_URL',
        token : "SONAR_LOGIN",
        options: {
                'sonar.projectName':  'Mflix',
                'sonar.projectDescription': 'Mflix app in nodejs',
                'sonar.sources': 'src',
                'sonar.tests': 'test',
                'sonar.javascript.coveragePlugin': 'lcov',
                'sonar.javascript.lcov.reportPaths': 'output/coverage/jest/lcov.info'
                }
        },
        () => process.exit()
)

