import HPdata from './hp';
import SRPdata from './srp';
import LDPdata from './ldp';

/*
* Author: pkundu
* Description: This is the main data provider entry that can give access to all data providers
* if there is need of any global data provider, it should be created here, else can be access via sub data providers
* */

export default class DataProvider {
  constructor() {
    this.endpoint = 'basecamp.realtor.com';
    this.hpData = new HPdata();
    this.srpData = new SRPdata();
    this.ldpData = new LDPdata();
    this.author = {
      'pkundu': 'Pradeep kundu'
    }
  }

  getEndPoint = () => {
    const args = process.argv;
    const endpoint = args.filter((arg) => {
      return arg.includes('realtor.com');
    });
    return ((endpoint !== undefined || endpoint !== null) ? endpoint[0] : this.endpoint);
  };
}
