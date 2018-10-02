import HP from './hp';
import SRP from './srp_page';
import QV from './quick_view';

/*
@author : pkundu
* Description: This is the main page object entry that can give access to all page obejcts
* if there is need of any global page obejct , it should be created here, else can be access via sub pages
* */

export default class PageObject {
  constructor() {
    this.homePageObject = new HP();
    this.srpPageObject = new SRP();
    this.qvPageObejct = new QV();
  }
}
