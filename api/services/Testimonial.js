var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    designation: {
        type: String,
        default: ""
    },
    company: {
        type: String,
        default: ""
    },
    testimonial: {
        type: String,
        default: ""
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
module.exports = mongoose.model('Testimonial', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);