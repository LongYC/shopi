import {createHmac} from 'crypto';

const generateSignature = (partnerKey: string, signatureBaseString: string): string =>
  createHmac('sha256', partnerKey).update(signatureBaseString).digest('hex');

export {generateSignature};
