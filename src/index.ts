import {createHmac} from 'crypto';

const generateSignature = (partnerKey: string, signatureBaseString: string): string =>
  createHmac('sha256', partnerKey).update(signatureBaseString).digest('hex');

/**
 * URL expires in 5 minutes and shop owners must login within 3 minutes after clicking the URL.
 * @see {@link https://open.shopee.com/documents?module=87&type=2&id=58&version=2}
 */
const generateShopAuthUrl = (partnerId: string, partnerKey: string, redirectUrl : string, isTest = false): string => {
  const authApiPath = '/api/v2/shop/auth_partner';
  const epochOfNowInSeconds = Math.floor(Date.now() / 1000);
  const signatureBaseString = `${partnerId}${authApiPath}${epochOfNowInSeconds}`;
  const signature = generateSignature(partnerKey, signatureBaseString);
  const apiHost = `https://partner${isTest ? '.test-stable' : ''}.shopeemobile.com`;
  return `${apiHost}${authApiPath}?partner_id=${partnerId}&timestamp=${epochOfNowInSeconds}&sign=${signature}&redirect=${redirectUrl}`;
};

export {generateShopAuthUrl, generateSignature};
