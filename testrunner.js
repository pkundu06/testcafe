const createTestCafe = require('testcafe');
const fs = require('fs');
const path = require('path');
require('events').EventEmitter.prototype._maxListeners = 1000;
const config = require('./localConfig');
let testcafe = null;
const {exec} = require('child_process');
const group = config.desktop.group;
const allFilesSync = (dir, fileList = []) => {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file)

        fileList.push(
            fs.statSync(filePath).isDirectory()
                ? allFilesSync(filePath)
                : filePath
        )
    });
    return fileList.filter((arr)=>{
        return arr.length !==0;
    })
};
function cleanReports() {
    return new Promise((resolve, reject)=>{
        // remove allure report if exist
        exec('rm -rf ' + 'allure', (err, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            resolve();
        });
        // remove existing screenshot if exist
        exec('rm -rf ' + 'reports', (err, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            resolve();
        });
    })

}
async function createReport(){
    console.log('Opening report .....');
    await exec('allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report', async (err, stdout, stderr) => {
        if (err) {
            console.log('couldn\'t execute the allure....');
            return;
        }
        await console.log(`stdout: ${stdout}`);
        await console.log(`stderr: ${stderr}`);
    });
}
try {
    createTestCafe()
        .then(tc => {
            testcafe = tc;
            const runner = testcafe.createRunner();
            runSuite =(suite)=>{
                const runoptions = {
                    skipJsErrors: config.desktop.skipCriticalConsoleJsErrors,
                    quarantineMode: config.desktop.quarantineMode,
                    speed: config.desktop.speed,
                    debugMode: false,
                    selectorTimeout: config.desktop.selectorTimeOut,
                    assertionTimeout: config.desktop.assertionTimeout,
                };
                return runner.
                src(suite)
                    .filter(testName => /^smoke/.test(testName))
                    .browsers(config.desktop.browser)
                    .reporter('allure')
                    .concurrency(config.desktop.concurrency)
                    .run(runoptions)
                    .catch(e => console.log('runner failed', e));
            }
            const testFolder = config.desktop.testsFolder;
            const testsList = allFilesSync(testFolder);
            console.log("Running tests under ", testsList);
            runSuite(testsList).then(()=>testcafe.close()).then(()=> createReport())
        });

}catch (e){
    console.error(e)
}


