module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getAllCategory: function (req, res) {
        if (req.body) {
            Category.getAllCategory(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    }
    // getCategoryImage: function (data, callback) {
    //     console.log("data inside Category: ", data);
    //     console.log(mongoose.Types.ObjectId(data._id));
    //     // Category.findOne({
    //     //     _id: mongoose.Types.ObjectId(data._id)
    //     //     // "myslug": data.myslug
    //     // }).exec(function (err, found) {
    //     //     console.log("Found: ", found);
    //     //     if (err) {
    //     //         console.log("**** inside getCompanyBanner  ******", err);
    //     //         callback(err, null);
    //     //     } else if (_.isEmpty(found)) {
    //     //         callback(null, "noDataound");
    //     //     } else {
    //     //         callback(null, found);
    //     //     }

    //     // });
    // }
};
module.exports = _.assign(module.exports, controller);
