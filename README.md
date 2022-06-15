# shopi

A collection of common functions for working with Shopee API in Node.js environment.

## Install

`$ npm install shopi`

## Usage

### generateShopAuthUrl

```js
import {generateShopAuthUrl} from 'shopi';
const shopAuthUrl = generateShopAuthUrl(partnerId, partnerKey, redirectUrl, isTest);
```

#### isTest

Type: `boolean`\
Default: `false`

Set to `true` to generate shop authorisation URL for test environment.

### generateSignature

```js
import {generateSignature} from 'shopi';
const signature = generateSignature(partnerKey, signatureBaseString);
```

## Development

To build: `$ npm run build`

To publish: `$ npm version && npm publish`
