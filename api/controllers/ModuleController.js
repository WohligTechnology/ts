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
    }
};
module.exports = _.assign(module.exports, controller);
