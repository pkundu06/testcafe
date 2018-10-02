import Dataprovider from '../../src/data_provider/web_data_provider/index';
import Tracking from '../../util/Tracking';
import Pageobject from '../../src/page_objects/index';
import Validators from '../../src/validators/tracking_validators/index';
import {waitForReact, ReactSelector} from 'testcafe-react-selectors';

const dp = new Dataprovider();
const validator = new Validators();
const endpoint = dp.getEndPoint();
const pageObject = new Pageobject();
const hpSelector = pageObject.homePageObject;
const tracking = new Tracking();

/*
* @Author: pkundu
* */

const classDescription = 'RDC-x HP Test';
fixture `RDC-x HP Test`.page(endpoint);

const testdDescriptionComponentTest = 'component, @author: ' + dp.author.pkundu +
  ' \n Given user lands on HP, verify search component area_type prop length is 9';

test.skip(testdDescriptionComponentTest, async (t) => {
  await waitForReact();
  const el = await ReactSelector('SearchBox');
  const component = await el.getReact();
  await t.expect(component.props.area_types.length).eql(9);
});


const testdDescription = 'p2, @author: ' + dp.author.pkundu +
  ' \n Given user lands on HP and search city, verify autocomplete populates ';
test(testdDescription, async (t) => {
  await t.typeText(hpSelector.hpSearchBoxX, dp.srpData.forSaleCity, {replace: true})
    .expect(hpSelector.hpSearchBoxAutoCompleteX.visible).ok("auto complete populate should be visible ")
});
