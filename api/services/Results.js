var schema = new Schema({
    result: [{

        question: String,
        selectedAnswer: String,
        marks: Number
    }],
    test: {
        type: Schema.Types.ObjectId,
        ref: 'Test',
        index: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
});

schema.plugin(deepPopulate, {
    populate: {
        'user': {
            select: '_id firstname lastname'
        }
    }
});
schema.plugin(deepPopulate, {
    populate: {
        'test': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Results', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "user test", "user test"));
var model = {

    findOneResults: function (data, callback) {
        Results.findOne({
            _id: data._id
        }).exec(function (err, found) {

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