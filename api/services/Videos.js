var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    url: {
        type: String,
        default: ""
    },
    thumbnail: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    relatedVideos: [{
        type: Schema.Types.ObjectId,
        ref: 'Videos'
    }],
    time: {
        type: String
    },
    views: {
        type: String,
        default: ""
    }
});

schema.plugin(deepPopulate, {
    Populate: {
        'relatedVideos': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Videos', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema,"relatedVideos","relatedVideos"));
var model = {};
module.exports = _.assign(module.exports, exports, model);