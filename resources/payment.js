"use strict";

var route = "/payment";

module.exports = {
    /*
    Initiate payment
    */
    initiate: {
        method: "post",
        route: [route, "/initiate"].join(""),
        params: ["action", "paymentType", "user*", "card*", "amount*", "country*", "currency*"]
    }
};