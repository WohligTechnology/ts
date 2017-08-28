var schema = new Schema({
    question: {
        type: String,
        required: true
    },
    question: {
        type: String
    },
    marks: {
        type: String
    },
    test: {
        type: Schema.Types.ObjectId,
        ref: 'Test'
    },
    options:[{
        option:{
            type:String
        },
        marks:{
            type:String
        },
        isCorrect: {
        type: String,
        default: "False",
        enum: ['True', 'False'],
        enumtype:true
    }
    }]
});

schema.plugin(deepPopulate, {
    Populate: {
        'test': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Question', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "test", "test"));
var model = {};
module.exports = _.assign(module.exports, exports, model);