import { Selector, t } from 'testcafe';

/*
* Author: pkundu
* Description: This is QV Page obejcs class, User can provider all page objects here.
* if there is need to create dynamic page object/action , user can create object/functions here
*/

export default class QVpageObject {
  constructor() {
    this.qvMapSnapshot = Selector('.qv-snapshot-map-btn');
    this.qvCommuteTimeButton = Selector('#api-commute-time');
    this.qvPrimaryLeadFormName = Selector('#primary #primary_lead_name');
    this.qvPrimaryLeadFormEmail = Selector('#primary #primary_lead_email');
    this.qvPrimaryLeadFormPhone = Selector('#primary #primary_lead_phone');
    this.qvprimaryLeadFormContactButton = Selector('#primary #primary_lead_submit');
    this.qvThankYouModalCloseButton = Selector("[style^='display: block;'] .close");
    this.qvBackButton = Selector('.full-screen-qv-back');
    this.qvSaveHeartButton = Selector(".qv-property-header [data-omtag='api:quickview:sticky:save:top:save']");
    this.loginEmailTextField = Selector('#email_address');
    this.loginEmailContinueButton = Selector("[ng-click='emailOnlySignin();']");
    this.loginAddPassword = Selector("[ng-click='addPassword()']");
    this.loginPassword = Selector('#password');
    this.loginSavePassword = Selector('.global-login-modal-actions>a');
    this.notNowLoginPass = Selector("[ng-click='sendFinishSignup(true)']");
    this.closeModalLogin = Selector('#loginEl .global-login-close');
    this.randomID = this.makeID();
    this.email = this.randomID + '@test.com';
    this.qvCommuteLinkMobile = Selector(".estimate-commute-popover-toggle");
    this.qvLeadFormMobileButton = Selector(".email-button");
    this.qvLeadFormMobileNameButton = Selector("#request_showing_lead_name");
    this.qvLeadFormMobileEmailButton = Selector("#request_showing_lead_email");
    this.qvLeadFormMobilePhoneButton = Selector("#request_showing_lead_phone");
    this.qvLeadFormContactMobileAgent = Selector("[data-omtrack='api:property-details:contact-agent']");
    this.qvRealtorInfo = Selector("[data-omtag=\"api:listingProvider:agentProfile\"]");
    this.qvCalMonthlyCost = Selector("#payment-monthly-cost");

  }
  makeID = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 7; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  firstTimeLogin = async () => {
    await t.typeText(this.loginEmailTextField, this.email, { replace: true });
    await t.click(this.loginEmailContinueButton);
    await t.click(this.notNowLoginPass);
    await t.eval(() => location.reload(true));
    //await t.click(this.closeModalLogin); // this is not working with testng, will investigae if its an angular selector issue
  };

  fillPrimaryLeadForm = async () => {
    await t.typeText(this.qvPrimaryLeadFormName, 'random', { replace: true });
    await t.typeText(this.qvPrimaryLeadFormEmail, this.email, { replace: true });
    await t.typeText(this.qvPrimaryLeadFormPhone, '3333333333', { replace: true });
    await t.click(this.qvprimaryLeadFormContactButton);
   // await t.click(this.qvThankYouModalCloseButton);
}
fillPrimaryLeadFormMobile = async () => {
    await t.click(this.qvLeadFormMobileButton);
    await t.typeText(this.qvLeadFormMobileNameButton, 'random', { replace: true });
    await t.typeText(this.qvLeadFormMobileEmailButton, this.email, { replace: true });
    await t.typeText(this.qvLeadFormMobilePhoneButton, '3333333333', { replace: true });
    await t.click(this.qvLeadFormContactMobileAgent);
};
}
