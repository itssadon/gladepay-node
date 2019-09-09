"use strict";

var route = "/resources";

module.exports = {
  /**
   * Get Supported Chargeable Banks
   */
  supportedChargableBanks: {
    method: "put",
    route: route,
    params: ["inquire"],
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
    params: ["inquire"],
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
    params: ["accountnumber*", "bankcode*"],
    data: {
      "inquire": "accountname"
    }
  },

  /**
   * Verify Bank Verification Number
   */
  bankVerificationNumber: {
    method: "put",
    route: [route, ""].join(""),
    params: ["bvn*"],
    data: {
      "inquire": "bvn"
    }
  },

  /**
   * Get Card Details
   */
  cardDetails: {
    method: "put",
    route: [route, ""].join(""),
    params: ["card_no*"],
    data: {
      "inquire": "card"
    }
  },

  /**
   * Get Card Charge
   */
  cardCharge: {
    method: "put",
    route: [route, ""].join(""),
    params: ["card_no*", "amount*"],
    data: {
      "inquire": "charges"
    }
  },

  /**
   * Get Account charge
   */
  accountCharge: {
    method: "put",
    route: route,
    params: ["amount*"],
    data: {
      "inquire": "charges",
      "type": "account"
    }
  }
};