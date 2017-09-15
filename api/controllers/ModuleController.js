module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    findOneModule: function (req, res) {
        if (req.body) {
            Module.findOneModule(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getModuleByCourse: function (req, res) {
        if (req.body) {
            Module.getModuleByCourse(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getModulesByModule: function (req, res) {
        if (req.body) {
            Module.getModuleByCourse(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAggreagteData: function (req, res) {
        // {
        //     $match: {
        //         name:"Category 1"
        //     }
        // },
        // {
        //     $project:{
        //         _id:1,
        //         name:1,
        //         course:1
        //     }
        // },
        // {
        //     $group:{
        //         _id:"$course.name",
        //     }
        // }
        Module.aggregate([{
            $lookup: {
                from: "courses",
                localField: "course",
                foreignField: "_id",
                as: "course"
            }
        },{
            $unwind: "$course"
        },{
            $lookup: {
                from: "categories",
                localField: "course.categories",
                foreignField: "_id",
                as: "course.categories"
            }
        },{
            $unwind: "$course.categories"
        },{
            $unwind: "$course.relatedCourse"
        },{
            $lookup: {
                from: "courses",
                localField: "course.relatedCourse",
                foreignField: "_id",
                as: "course.relatedCourse"
            }
        },{
            $unwind: "$course.relatedCourse"
        },{
            $group:{
                _id:"$_id",
                course:{
                    $push:"$course.relatedCourse"
                }
            }
        }],function(err,aggData){
            console.log("err",err);
            res.callback(null,aggData);
        })
    },
};
module.exports = _.assign(module.exports, controller);