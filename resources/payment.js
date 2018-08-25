"use strict";

var route = "/payment";

module.exports = {
  /**
   * One-off payment
   */
  card_payment: {
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
  charge_card: {
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
  charge_token: {
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
  validate_otp: {
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
  account_payment: {
    method: "put",
    route: [route].join(""),
    params: [{
      "action": "charge",
      "paymentType": "account"
    }, "user*", "account*", "amount*"]
  }
};