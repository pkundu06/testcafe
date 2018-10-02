const createTestCafe = require('testcafe');
const fs = require('fs');
const path = require('path');
require('events').EventEmitter.prototype._maxListeners = 1000;
const config = require('./localConfig');
let testcafe = null;
const {exec} = require('child_process');

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

try {
    createTestCafe()
        .then(tc => {
            testcafe = tc;
            const runner = testcafe.createRunner();
            runSuite =(suite)=>{
                const runoptions = {
                    skipJsErrors: config.mobile.skipCriticalConsoleJsErrors,
                    quarantineMode: config.mobile.quarantineMode,
                    speed: config.mobile.speed,
                    debugMode: false,
                    selectorTimeout: config.mobile.selectorTimeOut,
                    assertionTimeout: config.mobile.assertionTimeout,
                };
                return runner.
                src(suite)
                    .filter(testName => /^mobile/.test(testName))
                    .browsers(config.mobile.browser)
                    .concurrency(config.mobile.concurrency)
                    .run(runoptions)
                    .catch(e => console.log('runner failed', e));
            }
            const testFolder = config.mobile.testsFolder;
            const testsList = allFilesSync(testFolder);
            console.log("Running tests under ", testsList);
            runSuite(testsList).then(()=>testcafe.close()).then(()=> process.exit())
        })

}catch (e){
    console.error(e)
}
