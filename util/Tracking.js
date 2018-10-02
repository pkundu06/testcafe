import { RequestLogger,t } from 'testcafe';

export default class Tracking {
  constructor() {
    this.pageEvent = /api.segment.io\/v1\/p/;
    this.clickEvent = /api.segment.io\/v1\/t/;
    this.pageLogger = RequestLogger(this.pageEvent, {
      logRequestBody: true,
      logRequestHeaders: true,
      stringifyRequestBody: true,
      logResponseHeaders: true,
      logResponseBody: true,
    });
    this.clickLogger = RequestLogger(this.clickEvent, {
      logRequestBody: true,
      logRequestHeaders: true,
      stringifyRequestBody: true,
      logResponseHeaders: true,
      logResponseBody: true,
    });
  }
  clearTracking = async () => {
    await this.pageLogger.clear();
    await this.clickLogger.clear();
  };

  parseTrackingEvents = async (pageReqests, clickRequests) => {
      await t.wait(1000);
    const trackingData = {};
    if (pageReqests.length !== 0) {
      trackingData.trackPageData = [];
      await pageReqests.forEach((req) => {
        const data = req.request.body;
        trackingData.trackPageData.push(data);
      });
    }
    if (clickRequests.length !== 0) {
      trackingData.trackClickData = [];
      await clickRequests.forEach((req) => {
        const data = req.request.body;
        trackingData.trackClickData.push(data);
      });
    }
    return trackingData;
  };
}
