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
    this.Events = new Events(this.key);
}

const resources = {
    payment: require("./resources/payment"),
    disbursement: require("./resources/disbursement"),
    resources: require("./resources/resources"),
    loansAndInvestments: require("./resources/loans_and_investments")
};

GladePay.prototype = {
    extend: function (func) {
        const me = this;
        return function () {
            const data = arguments[0] || {};

            const method = ["post", "get", "put"].includes(func.method) ?
                func.method :
                (function () {
                    throw new Error("Method not Allowed! - Resource declaration error");
                })();

            var endpoint = me.endpoint + func.route,
                qs = {};

            var argsInEndpoint = endpoint.match(/{[^}]+}/g);
            if (argsInEndpoint) {
                argsInEndpoint.map(arg => {
                    arg = arg.replace(/\W/g, "");
                    if (!(arg in data)) {
                        throw new Error(`Argument '${arg}' is required`);
                    } else {
                        endpoint = endpoint.replace(`{${arg}}`, data[`${arg}`]);
                        delete data[arg];
                    }
                });
            }

            if (func.params) {
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

            if (func.args) {
                func.args.filter(a => {
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

            const options = {
                url: endpoint,
                json: true,
                method: method.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    key: `${me.key}`,
                    mid: `${me.mid}`
                }
            };

            if (method == "post" || method == "put") {
                const reqData = Object.assign(func.data, data);
                options.body = reqData;
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