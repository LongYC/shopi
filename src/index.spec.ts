import {generateSignature, generateShopAuthUrl} from './index';

test('generateSignature should return HMAC as hex.', () => {
  const partnerKey = '91316b9fea4dc';
  const signatureBaseString = '5e25d3d67094loremipsum4726871';
  expect(generateSignature(partnerKey, signatureBaseString))
    .toBe('b040233a5c134885e3ace15ca0d19d9456084d9a5d6c5b7e2dff03af0f1bc108');
});

test('generateShopAuthUrl should return Shopee V2 shop authorisation URL.', () => {
  const partnerId = '123456';
  const partnerKey = '60764defa86020d152a378562e768052f36752c39ceb807';
  const redirectUrl = 'https://example.com';
  const isTest = false;
  const result = generateShopAuthUrl(partnerId, partnerKey, redirectUrl, isTest);
  const resultUrl = new URL(result);
  const resultUrlSearchParams = resultUrl.searchParams;
  expect(resultUrl.origin).toBe('https://partner.shopeemobile.com');
  expect(resultUrl.pathname).toBe('/api/v2/shop/auth_partner');
  expect(resultUrlSearchParams.get('partner_id')).toBe(partnerId);
  expect(resultUrlSearchParams.get('redirect')).toBe(redirectUrl);
});

test('generateShopAuthUrl should return Shopee V2 shop authorisation URL for test environment.', () => {
  const partnerId = '567890';
  const partnerKey = '1937f0defa72420d274a372a623b62052e26b11c3912d7a1';
  const redirectUrl = 'https://test.example.com';
  const isTest = true;
  const result = generateShopAuthUrl(partnerId, partnerKey, redirectUrl, isTest);
  const resultUrl = new URL(result);
  const resultUrlSearchParams = resultUrl.searchParams;
  expect(resultUrl.origin).toBe('https://partner.test-stable.shopeemobile.com');
  expect(resultUrl.pathname).toBe('/api/v2/shop/auth_partner');
  expect(resultUrlSearchParams.get('partner_id')).toBe(partnerId);
  expect(resultUrlSearchParams.get('redirect')).toBe(redirectUrl);
});
