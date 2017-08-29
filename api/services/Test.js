var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    totalMarks: {
        type: String
    },
    duration: {
        type: Number
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    questionSet: [{
        question: String,
        marks:Number,
        option1: String,
        option2: String,
        option3: String,
        option4: String,
        correctAnswer:String
    }]
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