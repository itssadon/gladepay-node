"use strict";

var route = "/resources";

module.exports = {
  /**
   * Get Supported Chargeable Banks
   */
  supportedChargableBanks: {
    method: "put",
    route: route,
    params: ["inquire*"],
    data: {
      "inquire": "supported_chargable_banks"
    }
  },

  /**
   * Get The List of Banks
   */
  banks: {
    method: "put",
    route: [route, ""].join(""),
    params: ["inquire*"],
    data: {
      "inquire": "banks"
    }
  },

  /**
   * Verify The Account Name
   */
  accountName: {
    method: "put",
    route: [route, ""].join(""),
    params: ["inquire*", "accountnumber*", "bankcode*"]
  },

  /**
   * Get Card Details
   */
  cardDetails: {
    method: "put",
    route: [route, ""].join(""),
    params: ["inquire*", "card_no*"]
  },

  /**
   * Get Card Charge
   */
  cardCharge: {
    method: "put",
    route: [route, ""].join(""),
    params: ["inquire*", "card_no*", "amount*"]
  },

  /**
   * Get Account charge
   */
  accountCharge: {
    method: "put",
    route: [route, ""].join(""),
    params: [{
        "inquire": "charges",
        "type": "account"
      },
      "amount*"
    ]
  }
};