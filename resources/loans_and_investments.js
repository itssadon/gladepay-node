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
            ],
            data: {
                "action": "request"
            }
        },

        /**
         * Process the loan request by the client
         */
        process: {
            method: "put",
            route: [route, ""].join("/loans"),
            params: [
                "loan_id*",
                "status*"
            ],
            data: {
                "action": "process"
            }
        },

        /**
         * List the number of loans
         */
        list: {
            method: "put",
            route: [route, ""].join("/loans"),
            params: [
                "offset",
                "limit"
            ],
            data: {
                "action": "list"
            }
        },

        /**
         * View details of the loan
         */
        view: {
            method: "put",
            route: [route, ""].join("/loans"),
            params: [
                "loan_id*"
            ],
            data: {
                "action": "view"
            }
        },

        /**
         * Loan repayment
         */
        payment: {
            /**
             * Initiate repayment
             */
            repay: {
                method: "put",
                route: [route, ""].join("/repay"),
                params: [
                    "loan_id*",
                    "payment_method",
                    "ip",
                    "fingerprint",
                    "card",
                    "meta"
                ],
                data: {
                    "action": "repay"
                }
            }
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