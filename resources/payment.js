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
  }
};