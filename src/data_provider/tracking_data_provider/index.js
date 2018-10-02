import SRPtrackingData from './srp';
import HPtrackingData from './hp';
import LDPtrackingData from './ldp';

/*
* Author: pkundu
* Description: This is the main Tracking data provider entry that can give access to all data providers
* if there is need of any global data provider, it should be created here, else can be access via sub data providers
* */

export default class TrackingData {
  constructor() {
    this.srpTrackingData = new SRPtrackingData();
    this.hpTrackingData = new HPtrackingData();
    this.ldpTrackingData = new LDPtrackingData();
  }
}
