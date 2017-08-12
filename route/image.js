var express = require('express');
var router = express.Router();
var Q = require('q');
var multer = require('multer');
var imagePath = "../public";
var cnt = 0;
var upload = function (req, res) {
  var deferred = Q.defer();
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imagePath);
    },
    filename: function (req, file, cb) {
      file.uploadedFile = {
        name: "imgae" + ++cnt,
        ext: file.mimetype.split('/')[1]
      };
      cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
    }
  });

  var upload = multer({ storage: storage }).single('file');
  upload(req, res, function (err) {
    if (err) deferred.reject();
    else deferred.resolve(req.file.uploadedFile);
  });
  return deferred.promise;
};
router.post('/', function(req, res, next) {
  upload(req, res).then(function (file) {
      res.json(file);
    }, function (err) {
      res.send(500, err);
    });
    console.log('scus!');
});

module.exports = router;
