"use strict";

var route = "/payment";

module.exports = {
  /**
   * One-off payment
   */
  cardPayment: {
    method: "put",
    route: route,
    params: [
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*"
    ],
    data: {
      "action": "initiate",
      "paymentType": "card"
    }
  },

  /**
   * Recurrent
   */
  recurrent: {
    method: "put",
    route: route,
    params: [
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*",
      "recurrent*"
    ],
    data: {
      "action": "initiate",
      "paymentType": "card"
    }
  },

  /**
   * Installment
   */
  installment: {
    method: "put",
    route: route,
    params: [
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*",
      "installment*"
    ],
    data: {
      "action": "initiate",
      "paymentType": "card"
    }
  },

  /**
   * Charge card
   */
  chargeCard: {
    method: "put",
    route: route,
    params: [
      "user*",
      "card*",
      "amount*",
      "country*",
      "currency*",
      "txnRef*",
      "auth_type"
    ],
    data: {
      "action": "charge",
      "paymentType": "card"
    }
  },

  /**
   * Charge token
   */
  chargeToken: {
    method: "put",
    route: route,
    params: ["token*", "user*", "amount*"],
    data: {
      "action": "charge",
      "paymentType": "token"
    }
  },

  /**
   * OTP Validation
   */
  validateOtp: {
    method: "put",
    route: route,
    params: ["txnRef*", "otp*"],
    data: {
      "action": "validate"
    }
  },

  /**
   * Verify transaction
   */
  verify: {
    method: "put",
    route: route,
    params: ["txnRef*"],
    data: {
      "action": "verify"
    }
  },

  /**
   * Account payment
   */
  accountPayment: {
    method: "put",
    route: route,
    params: ["user*", "account*", "amount*"],
    data: {
      "action": "charge",
      "paymentType": "account"
    }
  },

  /**
   * Validate account payment
   */
  validateAccount: {
    method: "put",
    route: route,
    params: ["txnRef*", "otp*"],
    data: {
      "action": "validate",
      "validate": "account"
    }
  }
};
