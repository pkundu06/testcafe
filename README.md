# TestCafe framework to test React Apps
[test cafe FAQ](https://www.devexpress.com/Support/Center/Question/List/1)

<b>To install: npm install </b> </br>
To run  demo test locally: <b>node testrunner.js</b>
</br>
</br>
</br>
more info on testRunner: http://devexpress.github.io/testcafe/documentation/using-testcafe/programming-interface/runner.html
</br>
if you want to run on saucelab:
</br>
</br>
<b >export SAUCE_USERNAME="your Sauce username"</br>
export SAUCE_ACCESS_KEY="your sauce access key"</b>
</br>
</br>
also change your browser/s here: localConfig.json:
</br>
</br>
{
  "desktop": {
    "testsFolder": "tests/srp/",
    "browser": [
      "saucelabs:iPad Simulator@11.1","saucelabs:Samsung Galaxy S8 WQHD GoogleAPI Emulator@7.1","saucelabs:Chrome","saucelabs:Safari","saucelabs:Internet Explorer","saucelabs:Firefox"
    ]
  }
  </br>
  </br>
  then same commmand <b> node testrunner.js </b>
</p>
