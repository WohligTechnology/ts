module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    findOneCourse: function (req, res) {
        if (req.body) {
            Course.findOneCourse(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllCourse: function (req, res) {
        if (req.body) {
            Course.getAllCourse(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllQuestionSet: function (req, res) {
        if (req.body) {
            Questions.getAllQuestionSet(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    findOneQuestion: function (req, res) {
        Questions.findOneQuestion(req.body, res.callback);
    }
};
module.exports = _.assign(module.exports, controller);
