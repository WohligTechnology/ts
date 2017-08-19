var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    title: {
        type: String
    },
    image: {
        type: String,
        default: ""
    },
    bigImage: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String
    },
    sequence: {
        type: Number
    },
    relatedCourse: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tags'
    }]

});

schema.plugin(deepPopulate, {
    Populate: {
        'categories': {
            select: '_id name'
        },
        'relatedCourse': {
            select: '_id name'
        },
        'tags': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Course', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "categories relatedCourse tags", "categories relatedCourse tags"));
var model = {};
module.exports = _.assign(module.exports, exports, model);