Gladepay NodeJS 

[![Build Status](https://travis-ci.org/itssadon/gladepay-node.svg?branch=master)](https://travis-ci.org/itssadon/gladepay-node) [![Coverage Status](https://coveralls.io/repos/github/itssadon/gladepay-node/badge.svg?branch=master)](https://coveralls.io/github/itssadon/gladepay-node?branch=master) [![Software License][ico-license]](LICENSE.md) [![Total Downloads][ico-downloads]](https://www.npmjs.com/package/gladepay-node)
<!-- [![Code Intelligence Status][ico-code-intelligence]][link-code-intelligence] -->

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
  const gladepay = require('gladepay-node')('MERCHANT-ID')('MERCHANT-KEY');
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
    * cardDetails
    * cardCharge
    * accountCharge


## Tests

  `npm test`


## Contributing 🎸 💻

* Please do 🧡

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.


## TODO ✍

  * Add continuous integration
  * Add code coverage statistics
  * Add some sweet badges
