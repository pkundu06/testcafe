import { ClientFunction} from 'testcafe';

const uaParser = require('ua-parser');

const getUA =  ClientFunction(async () => navigator.userAgent);

const ua = getUA();

export default class Platform {

  isIphone = async ()=> {
    const platform = uaParser.parse(await ua).device.family;
    console.log('UA info', uaParser.parse(ua).device.family);
    return platform.lowerCase().includes('iphone');
  };
  isAndroid = async()=> {
    const platform = uaParser.parse(await ua).os.family;
    console.log('UA info', uaParser.parse(ua).os.family);
    return platform.toLowerCase().includes('iphone');
  };
  isChrome = async()=> {
    const platform = uaParser.parse(await ua).ua.family;
    console.log('UA info', uaParser.parse(ua).ua.family);
    return platform.toLowerCase().includes('chrome');
  };
  isIE = async()=> {
    const platform = uaParser.parse(await ua).ua.family;
    console.log('UA info', uaParser.parse(ua).ua.family);
    return platform.toLowerCase().includes('ie');
  };
  isIPad =async() =>{
    const platform = uaParser.parse(await ua).device.family;
    console.log('UA info', uaParser.parse(ua).device.family);
    return platform.toLowerCase().includes('ipad');
  };
  isSafari=async ()=> {
    const platform = uaParser.parse(await ua).ua.family;
    console.log('UA info', uaParser.parse(ua).ua.family);
    return platform.toLowerCase().includes('iphone');
  };
  isFirefox= async()=> {
    const platform = uaParser.parse(await ua).ua.family;
    console.log('UA info', uaParser.parse(ua).ua.family);
    return platform.toLowerCase().includes('firefox');
  };
}
