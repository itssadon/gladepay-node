"use strict";

var route = "/resource";

module.exports = {
  /**
   * Get Supported Chargeable Banks
   */
  supported_chargable_banks: {
    method: "put",
    route: [route].join(""),
    params: [{
      "inquire": "supported_chargable_banks"
    }]
  },

  /**
   * Get The List of Banks
   */
  banks: {
    method: "put",
    route: [route].join(""),
    params: [{
      "inquire": "banks"
    }]
  },

  /**
   * Verify The Account Name
   */
  account_name: {
    method: "put",
    route: [route].join(""),
    params: [{
        "inquire": "accountname"
      },
      "accountnumber*",
      "bankcode*"
    ]
  },

  /**
   * Get Card Details
   */
  card_details: {
    method: "put",
    route: [route].join(""),
    params: [{
        "inquire": "card"
      },
      "card_no*"
    ]
  },

  /**
   * Get Card Charge
   */
  card_charge: {
    method: "put",
    route: [route].join(""),
    params: [{
        "inquire": "charges"
      },
      "card_no*",
      "amount*"
    ]
  },

  /**
   * Get Account charge
   */
  account_charge: {
    method: "put",
    route: [route].join(""),
    params: [{
        "inquire": "charges",
        "type": "account"
      },
      "amount*"
    ]
  }
};