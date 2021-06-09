import {generateSignature} from './index';

test('generateSignature', () => {
  expect(generateSignature('91316b9fea4dc', '5e25d3d67094loremipsum4726871'))
    .toBe('b040233a5c134885e3ace15ca0d19d9456084d9a5d6c5b7e2dff03af0f1bc108');
});
