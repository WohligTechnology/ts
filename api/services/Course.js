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
    price: {
        type: String,
        default: ""
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

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "categories relatedCourse tags relatedCourse.relatedVideo", "categories relatedCourse tags relatedCourse.relatedVideo"));
var model = {

    getAllCourse: function (data, callback) {
        Course.find().deepPopulate("categories relatedCourse tags").exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },

    findOneCourse: function (data, callback) {
        Course.findOne({
            _id: data._id
        }).deepPopulate("categories relatedCourse tags").exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);