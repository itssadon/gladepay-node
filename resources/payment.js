"use strict";

var route = "/payment";

module.exports = {
  /**
   * One-off payment
   */
  cardPayment: {
    method: "put",
    route: [route].join(""),
    params: [{
        "action": "initiate",
        "paymentType": "card"
      },
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*"
    ]
  },

  /**
   * Recurrent
   */
  recurrent: {
    method: "put",
    route: [route].join(""),
    params: [{
        "action": "initiate",
        "paymentType": "card"
      },
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*",
      "recurrent*"
    ]
  },

  /**
   * Installment
   */
  installment: {
    method: "put",
    route: [route].join(""),
    params: [{
        "action": "initiate",
        "paymentType": "card"
      },
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*",
      "installment*"
    ]
  },

  /**
   * Charge card
   */
  chargeCard: {
    method: "put",
    route: [route].join(""),
    params: [{
        "action": "charge",
        "paymentType": "card"
      },
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*",
      "txnRef*",
      "auth_type"
    ]
  },

  /**
   * Charge token
   */
  chargeToken: {
    method: "put",
    route: [route].join(""),
    params: [{
      "action": "charge",
      "paymentType": "token"
    }, "token*", "user*", "amount*"]
  },

  /**
   * OTP Validation
   */
  validateOtp: {
    method: "put",
    route: [route].join(""),
    params: [{
      "action": "validate"
    }, "txnRef", "otp*"]
  },

  /**
   * Verify transaction
   */
  verify: {
    method: "put",
    route: [route].join(""),
    params: [{
      "action": "verify"
    }, "txnRef*"]
  },

  /**
   * Account payment
   */
  accountPayment: {
    method: "put",
    route: [route].join(""),
    params: [{
      "action": "charge",
      "paymentType": "account"
    }, "user*", "account*", "amount*"]
  },

  /**
   * Validate account payment
   */
  validateAccount: {
    method: "put",
    route: [route].join(""),
    params: [{
      "action": "validate",
      "validate": "account"
    }, "txnRef*", "otp*"]
  }
};