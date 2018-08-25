"use strict";

var route = "/payment";

module.exports = {
  /**
   * One-off payment
   */
  card_payment: {
    method: "put",
    route: [route].join(""),
    params: [
      "action*",
      "paymentType*",
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
    params: [
      "action*",
      "paymentType*",
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
    params: [
      "action*",
      "paymentType*",
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
    params: [
      "action*",
      "paymentType*",
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
   * Charge card
   */
  charge_token: {
    method: "put",
    route: [route].join(""),
    params: ["action*", "paymentType*", "token*", "user*", "amount*"]
  }
};