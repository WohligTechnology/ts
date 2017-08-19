var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    image: {
        type: String,
        default: ""
    },
    sequence: {
        type: Number
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Category', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAllCategory: function (data, callback) {
        Category.find({}).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataFound");
            } else {
                console.log("found in getAllCompany", found);
                callback(null, found);
            }

        });
    }
};
module.exports = _.assign(module.exports, exports, model);