"use strict";

var route = "";

module.exports = {
    /**
     * Create Client Profile
     */
    createProfile: {
        method: "put",
        route: [route, ""].join("/client"),
        params: [
            "data*",
            "verify_bvn"
        ],
        data: {
            "action": "create",
            "status": "pending_approval"
        }
    },
};