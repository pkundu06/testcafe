/*
* Author: pkundu
* Description: This is srp Data provider class, User can provider all constants here
* if there is need to create dynamic data , user can create object/functions here
  for eg: createSrpUrlWithParam (){
  return this.realestateandhomesSearch + '?abc'+ '&xyz';
}
*/

export default class SRPdata {
  constructor() {
    this.forSaleCity = 'miami, fl';
    this.realestateandhomesSearch = '/realestateandhomes-search/';
  }
}
