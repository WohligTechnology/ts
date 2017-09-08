module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveUser: function (req, res) {
    if (req.body) {
      User.saveLoginData(req.body, function (err, data) {
        if (err) {
          res.json({
            value: false,
            data: err
          });

        } else {
          req.session.user = data;
          console.log("User Data", req.session.user);
          res.json({
            value: true,
            data: data
          });
        }
      });
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },
  
  login: function(req, res) {
    var callback = function(err, data) {
      if (err || _.isEmpty(data)) {
        res.json({
          error: err,
          value: false
        });
      } else {
        if (data._id) {
          req.session.user = data;
          req.session.save();
          console.log(req.session.user);
          res.json({
            data: data,
            value: true
          });
        } else {
          req.session.user = {};

          res.json({
            data: {},
            value: false
          });
        }
      }
    };
    if (req.body) {
      if (req.body.email && req.body.email !== "" && req.body.password && req.body.password !== "") {
        User.login(req.body, callback);
      } else {
        res.json({
          data: "Please provide params",
          value: true
        });
      }
    } else {
      res.json({
        data: "Invalid Call",
        value: true
      });
    }
  },

  getProfile: function (req, res) {
    // var user = req.session.user;
    if (req.body) {
      if (req.session.user) {
        req.body._id = req.session.user._id;
        User.getOne(req.body, function (err, respo) {
          if (err) {
            res.json({
              value: true,
              data: err
            });
          } else {
            req.session.user = respo;
            res.json({
              value: true,
              data: respo
            });
          }
        });
      } else {
        res.json({
          data: "User not logged in",
          value: false
        });
      }
    } else {
      res.json({
        data: "Invalid Request",
        value: false
      });
    }
  },

  setUserSession: function (req, res) {
    // var user = req.session.user;
    if (req.body._id) {
      User.getOne(req.body, function (err, respo) {
        if (err) {
          res.json({
            value: true,
            data: err
          });
        } else {
          req.session.user = respo;
          res.json({
            value: true,
            data: respo
          });
        }
      });
    } else {
      res.json({
        data: "Invalid Request",
        value: false
      });
    }
  },

  loginCheck: function (req, res) {
    var callback = function (err, data) {
      if (err || _.isEmpty(data)) {
        res.json({
          error: err,
          value: false
        });
      } else {
        if (data) {
          req.session.user = data;
          //req.session.save();
          console.log(req.session.user);
          res.json({
            data: data,
            value: true
          });
        } else {

          req.session.user = {};
          res.json({
            data: {},
            value: false
          });
        }
      }
    };
    if (req.body) {
      if (req.body.email && req.body.email !== "" && req.body.password && req.body.password !== "") {
        User.login(req.body, callback);
      } else {
        res.json({
          data: "Please provide params",
          value: true
        });
      }
    } else {
      res.json({
        data: "Invalid Call",
        value: true
      });
    }
  },
  logout: function (req, res) {
    req.session.destroy(function (err) {
      res.json({
        data: "Logout Successful",
        value: true
      });
    });
  },
    loginFacebook: function (req, res) {
        passport.authenticate('facebook', {
            scope: ['public_profile', 'user_friends', 'email'],
            failureRedirect: '/'
        }, res.socialLogin)(req, res);
    },
    loginGoogle: function (req, res) {
        if (req.query.returnUrl) {
            req.session.returnUrl = req.query.returnUrl;
        } else {

        }

        passport.authenticate('google', {
            scope: ['openid', 'profile', 'email'],
            failureRedirect: '/'
        }, res.socialLogin)(req, res);
    },
    profile: function (req, res) {
        if (req.body && req.body.accessToken) {
            User.profile(req.body, res.callback);
        } else {
            res.callback("Please provide Valid AccessToken", null);
        }
    },
    pdf: function (req, res) {

        var html = fs.readFileSync('./views/pdf/demo.ejs', 'utf8');
        var options = {
            format: 'A4'
        };
        var id = mongoose.Types.ObjectId();
        var newFilename = id + ".pdf";
        var writestream = gfs.createWriteStream({
            filename: newFilename
        });
        writestream.on('finish', function () {
            res.callback(null, {
                name: newFilename
            });
        });
        pdf.create(html).toStream(function (err, stream) {
            stream.pipe(writestream);
        });
    },
    backupDatabase: function (req, res) {
        res.connection.setTimeout(200000000);
        req.connection.setTimeout(200000000);
        var q = req.host.search("127.0.0.1");
        if (q >= 0) {
            _.times(20, function (n) {
                var name = moment().subtract(5 + n, "days").format("ddd-Do-MMM-YYYY");
                exec("cd backup && rm -rf " + name + "*", function (err, stdout, stderr) { });
            });
            var jagz = _.map(mongoose.models, function (Model, key) {
                var name = Model.collection.collectionName;
                return {
                    key: key,
                    name: name,
                };
            });
            res.json("Files deleted and new has to be created.");
            jagz.push({
                "key": "fs.chunks",
                "name": "fs.chunks"
            }, {
                    "key": "fs.files",
                    "name": "fs.files"
                });
            var isBackup = fs.existsSync("./backup");
            if (!isBackup) {
                fs.mkdirSync("./backup");
            }
            var mom = moment();
            var folderName = "./backup/" + mom.format("ddd-Do-MMM-YYYY-HH-mm-SSSSS");
            var retVal = [];
            fs.mkdirSync(folderName);
            async.eachSeries(jagz, function (obj, callback) {
                exec("mongoexport --db " + database + " --collection " + obj.name + " --out " + folderName + "/" + obj.name + ".json", function (data1, data2, data3) {
                    retVal.push(data3 + " VALUES OF " + obj.name + " MODEL NAME " + obj.key);
                    callback();
                });
            }, function () {
                // res.json(retVal);
            });
        } else {
            res.callback("Access Denied for Database Backup");
        }
    },
    getAllMedia: function (req, res) {
        Media.getAllMedia(req.body, res.callback);
    },
    sendmail: function (req, res) {
        Config.sendEmail("chintan@wohlig.com", "jagruti@wohlig.com", "first email from endgrid", "", "<html><body>dome content</body></html>");
    }

};
module.exports = _.assign(module.exports, controller);