import LeadTrackingValidator from './lead_tracking_validator';
import SrpTrackingValidator from './srp_tracking_validators';
import QvTrackingValidator from './qv_tracking_validator';

export default class TrackingValidator {
  constructor() {
    this.leadTrackingValidator = new LeadTrackingValidator();
    this.srpTrackingValidator = new SrpTrackingValidator();
    this.qvTrackingValidator = new QvTrackingValidator();
  }
}
