import Dataprovider from '../../src/data_provider/web_data_provider/index';
import Tracking from '../../util/Tracking';
import Pageobject from '../../src/page_objects/index';
import Validators from '../../src/validators/tracking_validators/index';
import {ClientFunction} from 'testcafe';



/*
* @Author: pkundu
* */

const classDescription = 'Seach Tests';
fixture `Seach Tests`.page('http://google.com')


let testdDescription = `smoke:api `;


test.meta({
    ID: '123',
    SEVERITY: 'P0',
    TEST_RUN: 'Regression',
})(testdDescription , async (t) => {

    let request = require('request');
    request('http://www.google.com', await function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
});











