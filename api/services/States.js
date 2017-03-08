var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        required: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('States', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    doLogin: function (data, callback) {
        console.log("data--", data)
        States.findOne({
            userId: data.userid,
            password: data.password
        }).exec(function (err, found) {
            if (err) {
                // console.log(err);
                callback(err, null);
            } else {
                if (found) {
                    console.log("m found", found)
                    var foundObj = found.toObject();
                    callback(null, foundObj);

                } else {
                    callback({
                        message: "Incorrect Credentials!"
                    }, null);
                }
            }

        });
    }
};
module.exports = _.assign(module.exports, exports, model);