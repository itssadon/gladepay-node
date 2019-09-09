# Gladepay NodeJS 

[![Build Status][ico-travis]][link-travis] [![Coverage Status][ico-coverage]][link-coverage] [![Software License][ico-license]](LICENSE.md) [![npm][ico-npm]][link-npm] [![npm][ico-downloads]][link-downloads]

💳 📦 💰 A NodeJS library that simplifies payment with Gladepay APIs

## Installation

  For Yarn
  ```
  yarn add gladepay-node
  ```
  For NPM
  ```
  npm install gladepay-node --save
  ```

## Usage

  ```js
  // Require the library
  // mode defaults to false for test mode and could be `boolean` true or false
  const gladepay = require('gladepay-node')('MERCHANT-ID', 'MERCHANT-KEY', mode);
  ```

### Making calls

  The resource methods promisified

  Format → `gladepay.{resource}.{method}`

  ```js
  // gladepay.{resource}.{method}
  gladepay.resource
    .supportedChargableBanks()
    .then(function(body) {
      console.log(body);
    })
    .catch(function(error) {
      console.log(error);
    });
  ```

  All Resource methods parameters are provided as the only argument


### Resources 📔

  * payment
    * cardPayment
    * recurrent
    * installment
    * chargeCard
    * chargeToken
    * validateOtp
    * verify
    * accountPayment
    * validateAccount
  * disburse
    * transfer
  * resource
    * supportedChargableBanks
    * banks
    * accountName
    * verifyBVN
    * cardDetails
    * cardCharge
    * accountCharge
    * personlizedAccount


## Tests

  `npm test`


## Contributing 🎸 💻

* Please do 🧡

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

Kindly [follow me on twitter](https://twitter.com/itssadon)!

## TODO ✍

  * Add continuous integration
  * Add code coverage statistics
  * Add some sweet badges

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-travis]: https://travis-ci.org/itssadon/gladepay-node.svg?branch=master
[ico-coverage]: https://coveralls.io/repos/github/itssadon/gladepay-node/badge.svg?branch=master
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ico-npm]: https://img.shields.io/npm/v/gladepay-node.svg
[ico-downloads]: https://img.shields.io/npm/dt/gladepay-node.svg

[link-travis]: https://travis-ci.org/itssadon/gladepay-node
[link-coverage]: https://coveralls.io/github/itssadon/gladepay-node?branch=master
[link-npm]: https://www.npmjs.com/package/gladepay-node
[link-downloads]: https://www.npmjs.com/package/gladepay-node

[link-author]: https://github.com/itssaon
[link-contributors]: ../../contributors
