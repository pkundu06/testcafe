import SRPwebValidator from './srp';
import QVwebValidator from './qv';

export default class WebvValidator {
  constructor() {
    this.srpWebValidator = new SRPwebValidator();
    this.qvWebValidator = new QVwebValidator();
  }
}
