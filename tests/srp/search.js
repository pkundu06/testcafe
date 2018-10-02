import Dataprovider from '../../src/data_provider/web_data_provider/index';
import Tracking from '../../util/Tracking';
import Pageobject from '../../src/page_objects/index';
import Validators from '../../src/validators/tracking_validators/index';
import {ClientFunction} from 'testcafe';

const dp = new Dataprovider();
const validator = new Validators();
const leadTrackValidaor = validator.leadTrackingValidator;
const endpoint = dp.getEndPoint();
const pageObject = new Pageobject();
const hpSelector = pageObject.homePageObject;
const srpSelector = pageObject.srpPageObject;
const qvSelector = pageObject.qvPageObejct;
const tracking = new Tracking();

/*
* @Author: pkundu
* */

const classDescription = 'Seach Tests';
fixture `Seach Tests`.page('https://www.realtor.com?supadslib=all').requestHooks(tracking.pageLogger, tracking.clickLogger)
const email = 'abcd5555dfdjjjj@test.com';

test.before(async (t) => {
    console.log("Starting test")
    await tracking.clearTracking();
    await ClientFunction(async () => {
        document.cookie = 'threshold_value=1';
        document.cookie = '__vst=xyz';
        window.onload =  () => {
            return true;
        };
    })();

});
test.after(async (t) => {
    console.log("Finished test")
});



var testdDescription = `smoke, @author: ${dp.author.pkundu} 
  Given user lands on HP` +
    'When User search for city , verify it lands on SRP' +
    'When User click srp property, verify it lands on QV' +
    'When User fill the lead form verify lead is sent and open thank you modal' +
    'verify t,p event for lead form/page is captured' +
    'when User clicks back button from QV, verify user lands on srp page';


    test.meta({
        ID: '123',
        SEVERITY: 'P0',
        TEST_RUN: 'Regression',
    })(testdDescription + Math.random(), async (t) => {

        await t.expect(hpSelector.hpSearchBox.exists);
        await t.expect(hpSelector.hpSearchBox.with({visibilityCheck: true}));
        await t.click(hpSelector.hpSearchBox);
        await t.typeText(hpSelector.hpSearchBox, dp.srpData.forSaleCity, {replace: true});
        await t.click(hpSelector.hpSearchButton);
        await t.expect(srpSelector.srpCardImage.exists).ok('SRP card image should be visible');
        // await t.click(srpSelector.srpPagination2);
        // await t.expect(srpSelector.srpCardImage.exists).ok('SRP card image should be visible');
      //  await t.hover(srpSelector.srpDesktopMapButton);
        // await t.click(srpSelector.srpDesktopMapButton);
        // await t.expect(srpSelector.srpMapZoomInButton.exists).ok("map zoom button is not present");
        // await t.click(srpSelector.srpMapZoomInButton);
        // await t.click(srpSelector.srpMapZoomInButton);
        // await t.expect(srpSelector.srpMapPin.with({visibilityCheck: true})).ok("map pin is not visible");
        // await t.eval(()=> {return new Promise((res,rej)=>res(document.querySelector('.map-property-pin:nth-child(1)').click()))});
        // await t.expect(srpSelector.srpMapCard.with({visibilityCheck: true})).ok("map card should be visible");
        // await t.eval(()=> {return new Promise((res,rej)=>res(document.querySelector('.mini-card-inner-container img').click()))});
        // await t.expect(qvSelector.qvPrimaryLeadFormName.visible).ok('primary lead form should be visible');
        // // await tracking.clearTracking();
        // await qvSelector.fillPrimaryLeadForm();
        // const trackingData = await tracking.parseTrackingEvents(tracking.pageLogger.requests, tracking.clickLogger.requests);
        // await leadTrackValidaor.leadCoBrokeTrackingValidator(trackingData);
        // await leadTrackValidaor.leadCoBrokeTrackingStatus(tracking.pageLogger.requests);
        // await leadTrackValidaor.leadCoBrokeTrackingStatus(tracking.clickLogger.requests);
        // await tracking.clearTracking();
        //  await t.click(qvSelector.qvSaveHeartButton);
        // await qvSelector.firstTimeLogin();
        // await t.expect(qvSelector.qvSaveHeartButton.visible).ok();
        // await t.click(qvSelector.qvBackButton);
        // await t.expect(srpSelector.srpCardImage.visible).ok('SRP CARD SHOULD BE VISIBLE');

    });



// });
test.skip
(`Test:`, async (t) => {
    // await t.typeText(hpSelector.hpSearchBox, dp.srpData.forSaleCity, { replace: true });
    // await t.click(hpSelector.hpSearchButton);
    await srpSelector.srpCardImage.exists;
    await t.expect(srpSelector.srpCardImage.visible).ok('SRP CARD SHOULD BE VISIBLE');
    await t.click(srpSelector.srpCardImage);
    (await qvSelector.qvMapSnapshot.exists) && (await qvSelector.qvMapSnapshot.visible);
    // await qvSelector.fillPrimaryLeadForm();
    // await t.expect(qvSelector.qvSaveHeartButton.visible).ok();
    // await t.click(qvSelector.qvBackButton);
    // await t.expect(srpSelector.srpCardImage.visible).ok('SRP CARD SHOULD BE VISIBLE');

});










