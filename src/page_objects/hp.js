import { Selector, t } from 'testcafe';

/*
* Author: pkundu
* Description: This is HP Page obejcs class, User can provider all page objects here.
* if there is need to create dynamic page object/action , user can create object here
*/

export default class HPpageObject {
  constructor() {
    this.hpSearchBox = Selector('#searchBox');
    this.hpSearchButton = Selector('.js-searchButton');
    this.hpSearchBoxX = Selector('#downshift-0-input');
    this.hpSearchBoxAutoCompleteX = Selector('[class*="autocomplete"]')
  }
}
