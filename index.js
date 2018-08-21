/**
 * Gladepay API wrapper
 * @author Abubakar Hassan < @itssadon >
 */

const request = require('request-promise');
const endpoint = 'https://mc.payit.ng';
const Events = require("./resources/events");

function Gladepay(key) {
    if (!(this instanceof Gladepay)) {
        return new Gladepay(key);
    }

    this.endpoint = endpoint;
    this.key = key;
    this.importResources();

    // Setup Events
    this.Events = new Events(this.key);
}

const resources = {
    threeds: require("./resources/threeds"),
    gtbank: require("./resources/gtbank"),
    merchant: require("./resources/merchant"),
    transaction: require("./resources/transaction"),
    changeback: require("./resources/chargeback")
};

Gladepay.prototype = {
    extend: function (func) {
        const me = this;
        return function () {
            const data = arguments[0] || {};

            // check method
            const method = ["post", "get", "put"].includes(func.method) ?
                func.method :
                (function () {
                    throw new Error("Method not Allowed! - Resource declaration error");
                })();

            var endpoint = me.endpoint + func.route,
                qs = {};

            // incase of endpoints with no params requirement
            if (func.params) {
                // check args
                func.params.filter(param => {
                    if (!param.includes("*")) return;

                    param = param.replace("*", "");
                    if (!(param in data)) {
                        throw new Error(`Parameter '${param}' is required`);
                    }

                    return;
                });
            }

            // incase of endpoints with no args requirement
            if (func.args) {
                // check args
                func.args.filter(a => {
                    // remove unwanted properties
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
                    Authorization: `Bearer ${me.key}`
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
            Gladepay.prototype[i] = new anon();
        }
    },
    FeeHelper: require("./resources/fee_helper")
};

module.exports = Gladepay;