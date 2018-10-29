/**
 * GladePay API wrapper
 * @author Abubakar Hassan < @itssadon >
 */

const request = require('request-promise');
const endpoint = 'https://api.gladepay.com';
const Events = require("./resources/events");

function GladePay(merchantId, merchantKey) {
    if (!(this instanceof GladePay)) {
        return new GladePay(merchantId, merchantKey);
    }

    this.endpoint = endpoint;
    this.mid = merchantId;
    this.key = merchantKey;
    this.importResources();

    // Setup Events
    this.Events = new Events(this.key);
}

const resources = {
    payment: require("./resources/payment"),
    disburse: require("./resources/disburse"),
    resource: require("./resources/resource")
};

GladePay.prototype = {
    extend: function (func) {
        const me = this;
        return function () {
            const data = arguments[0] || {};

            // Check method
            const method = ["post", "get", "put"].includes(func.method) ?
                func.method :
                (function () {
                    throw new Error("Method not Allowed! - Resource declaration error");
                })();

            var endpoint = me.endpoint + func.route,
                qs = {};

            // Incase of endpoints with no params requirement
            if (func.params) {
                // Check args
                func.params.filter(param => {
                    if (!param.includes("*")) return;

                    param = param.replace("*", "");
                    if (!(param in data)) {
                        throw new Error(`Parameter '${param}' is required`);
                    }

                    return;
                });
            }

            // Incase of endpoints with no args requirement
            if (func.args) {
                // Check args
                func.args.filter(a => {
                    // Remove unwanted properties
                    if (!a.includes("*")) {
                        if (a in data) {
                            qs[`${a}`] = data[`${a}`];
                        }
                        return;
                    }

                    a = a.replace("*", "");
                    if (!(a in data)) {
                        throw new Error(`Argument '${a}' is required`);
                    } else {
                        qs[`${a}`] = data[`${a}`];
                    }

                    return;
                });
            }

            var argsInEndpoint = endpoint.match(/{[^}]+}/g);
            if (argsInEndpoint) {
                argsInEndpoint.map(arg => {
                    arg = arg.replace(/\W/g, "");
                    if (!(arg in data)) {
                        throw new Error(`Argument '${arg}' is required`);
                    } else {
                        endpoint = endpoint.replace(`{${arg}}`, data[`${arg}`]);
                    }
                });
            }

            // Create request
            const options = {
                url: endpoint,
                json: true,
                method: method.toUpperCase(),
                headers: {
                    mid: `${me.mid}`,
                    key: `${me.key}`
                }
            };

            if (method == "post" || method == "put") {
                options.body = data;
            } else {
                options.qs = qs;
            }

            return request(options);
        };
    },
    importResources: function () {
        for (var i in resources) {
            const anon = function () {};
            for (var j in resources[i]) {
                anon.prototype[j] = this.extend(resources[i][j]);
            }
            GladePay.prototype[i] = new anon();
        }
    }
};

module.exports = GladePay;