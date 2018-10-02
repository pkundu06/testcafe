import { t } from 'testcafe';
import TrackingData from '../../data_provider/tracking_data_provider/index';

export default class LDPTrackingValidator {
  constructor() {
    this.trackingData = new TrackingData();
  }

  leadCoBrokeTrackingStatus = async (trackingData) => {
    await trackingData.forEach(async (req) => {
      await t.expect(req.response.statusCode === 200).ok('expected 200, found' + req.response.statusCode);
    });
  };

  leadCoBrokeTrackingValidator = async (trackingData) => {
    const leadData = await JSON.parse(trackingData.trackClickData[0]);
    const modalData = await JSON.parse(trackingData.trackClickData[1]);
   // console.log(leadData);
    const expectedLeadEvent = this.trackingData.ldpTrackingData.leadTypeEvent;
    const expectedModalEvent = this.trackingData.ldpTrackingData.leadModalImpression;
    await t.expect(leadData.event === expectedLeadEvent).ok('Expecting ' + expectedLeadEvent + ' found ' + leadData.event);
    await t.expect(modalData.event === expectedModalEvent).ok('Expecting ' + expectedModalEvent + 'found ' + modalData.event);
  };
}
