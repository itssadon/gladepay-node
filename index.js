/**
 * GladePay API wrapper
 * @author Abubakar Hassan < @itssadon >
 */

const request = require('request-promise');
const endpoint = 'https://api.gladepay.com';
const demoEndpoint = 'https://demo.api.gladepay.com';
const Events = require("./resources/events");

function GladePay(merchantId, merchantKey, mode = false) {
    if (!(this instanceof GladePay)) {
        return new GladePay(merchantId, merchantKey);
    }

    this.endpoint = (mode) ? endpoint : demoEndpoint;
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

            // Highest priority should go to path variables parsing and validation
            var argsInEndpoint = endpoint.match(/{[^}]+}/g);
            if (argsInEndpoint) {
                argsInEndpoint.map(arg => {
                    arg = arg.replace(/\W/g, "");
                    if (!(arg in data)) {
                        throw new Error(`Argument '${arg}' is required`);
                    } else {
                        endpoint = endpoint.replace(`{${arg}}`, data[`${arg}`]);
                        // to avoid error, remove the path arg from body | qs params
                        // by deleting it from the data object before body | qs params are set
                        delete data[arg];
                    }
                });
            }

            // Incase of endpoints with no params requirement
            if (func.params) {
                // Check args
                func.params.filter(param => {
                    if (typeof param === 'string') {
                        if (!param.includes("*")) return;

                        param = param.replace("*", "");
                        if (!(param in data)) {
                            throw new Error(`Parameter '${param}' is required`);
                        }

                        return;
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

            // Create request
            let options = {
                url: endpoint,
                json: true,
                method: method.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    key: `${me.key}`,
                    mid: `${me.mid}`
                }
            };

            var requestData = (data) ? data : func.data;

            if (method == "post" || method == "put") {
                options.body = requestData;
            } else {
                options.qs = qs;
            }

            console.info(options);

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