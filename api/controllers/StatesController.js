module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    doLogin: function (req, res) {
        if (req.body) {
            States.doLogin(req.body, res.callback);
        } else {
            res.callback("Incorrect Credentials!", null);
        }
    },

};
module.exports = _.assign(module.exports, controller);