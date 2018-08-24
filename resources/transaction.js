"use strict";

var route = "/transaction";

module.exports = {
    /*
    Initialize transaction
    */
    initialize: {
        method: "post",
        route: [route, "/initialize"].join(""),
        params: ["reference", "amount*", "email*", "plan"]
    },

    /*
    Verify transaction
    */
    verify: {
        method: "get",
        route: [route, "/verify/{reference}"].join(""),
        params: ["reference*"]
    },

    /*
    List transactions
    */
    list: {
        method: "get",
        route: route
    },

    /*
    Get transaction
    */
    get: {
        method: "get",
        route: [route, "/{id}"].join(""),
        params: ["id*"]
    }
};