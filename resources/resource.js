"use strict";

var route = "/resource";

module.exports = {
  /**
   * Get Supported Chargeable Banks
   */
  supported_chargable_banks: {
    method: "get",
    route: [route].join(""),
    params: [{
      "inquire": "supported_chargable_banks"
    }]
  },

  /**
   * Get The List of Banks
   */
  banks: {
    method: "get",
    route: [route].join(""),
    params: [{
      "inquire": "banks"
    }]
  },

  /**
   * Verify The Account Name
   */
  account_name: {
    method: "get",
    route: [route].join(""),
    params: [
      {"inquire": "accountname"},
      "accountnumber*",
      "bankcode*"
    ]
  }
};