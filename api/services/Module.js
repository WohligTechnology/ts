var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true

    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    smallImage: {
        type: String,
        default: ""
    },
    bigVideoImage: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String,
        default: ""
    },
    duration: {
        type: String,
        default: ""
    },
    author: {
        type: String,
        default: ""
    },
    sequence: {
        type: Number
    },
    courseTime: {
        type: Number
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    moduleAuthor: {
        type: String,
        default: ""
    },
    authorImage: {
        type: String,
        default: ""
    },
    authorTitle: {
        type: String,
        default: ""
    },
    authorDescription: {
        type: String,
        default: ""
    }
});

schema.plugin(deepPopulate, {
    Populate: {
        'course': {
            select: '_id name'
        },
        'course course.relatedCourse': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Module', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "course course.relatedCourse", "course course.relatedCourse"));
var model = {

    getModuleByCourse: function (data, callback) {
        console.log(data);
        Module.find({
            course: data.course

        }).deepPopulate("course course.relatedCourse").exec(function (err, found) {

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

    findOneModule: function (data, callback) {
        Module.findOne({
            _id: data._id
        }).deepPopulate("course course.relatedCourse").exec(function (err, found) {

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