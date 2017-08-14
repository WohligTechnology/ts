var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
        
    },
    title:{
        type:String,
        default: ""
    },
    description:{
        type:String,
        default: ""
    },
    image:{
        type:String,
        default: ""
    },
    author:{
        type:String,
        default: ""
    },
    sequence:{
        type:Number
    },
    courseTime:{
        type:Number
    },
    course:{
            type: Schema.Types.ObjectId,
            ref: 'Course'
    },
    moduleAuthor:{
        type:String,
        default: ""
    },
    authorImage:{
        type:String,
        default: ""
    },
    authorTitle:{
        type:String,
        default: ""
    },
    authorDescription:{
        type:String,
        default: ""
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Module', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);