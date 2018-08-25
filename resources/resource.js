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
  }
};