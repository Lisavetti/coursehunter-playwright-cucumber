const reporter = require("cucumber-html-reporter");

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsscenario: true,
    scenarioTimestamp: true,
    launchReport: false, 
    metadata: {
        "AppVersion": '2.0.0',
        "Test Enviroment": "STAGING",
        Browser: "Chrome 54.0",
        Platform: "MacOS 13.0"
    }
}

reporter.generate(options)