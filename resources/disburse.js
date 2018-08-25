"use strict";

var route = "disburse";

module.exports = {
    /**
     * Money transfer
     */
    transfer: {
        method: "put",
        route: [route].join(""),
        params: ["action*", "amount*", "bankcode*", "accountnumber*", "sender_name*", "narration"]
    }
}