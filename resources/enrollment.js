"use strict";

var route = "/clients";

module.exports = {
    /**
     * Create Profile
     */
    createProfile: {
        method: "put",
        route: route,
        params: [
            "data*",
            "verify_bvn"
        ],
        data: {
            "action": "create",
            "status": "pending_approval"
        }
    }
};