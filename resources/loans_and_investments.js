"use strict";

var route = "";

module.exports = {
    /**
     * Loans
     */
    loans: {
        /**
         * Make a request for loans
         */
        request: {
            method: "put",
            route: [route, ""].join("/loans"),
            params: [
                "client_id*",
                "interestSettings*",
                "amount*",
                "tax_applied*",
                "tax_rate*",
                "period*"
            ]
        }
    },

    /**
     * Clients
     */
    client: {
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

        /**
         * Update Client Profile
         */
        updateProfile: {
            method: "put",
            route: [route, ""].join("/client"),
            params: [
                "client_id*",
                "data*"
            ],
            data: {
                "action": "update"
            }
        },

        /**
         * List of all profiles created
         */
        listProfiles: {
            method: "put",
            route: [route, ""].join("/client"),
            params: [
                "offset",
                "limit"
            ],
            data: {
                "action": "list"
            }
        },

        /**
         * View details of a profile
         */
        viewProfile: {
            method: "put",
            route: [route, ""].join("/client"),
            params: [
                "client_id*"
            ],
            data: {
                "action": "view"
            }
        }
    }
};