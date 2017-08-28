var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    totalMarks: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
});

schema.plugin(deepPopulate, {
    Populate: {
        'course': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Test', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "course", "course"));
var model = {};
module.exports = _.assign(module.exports, exports, model);