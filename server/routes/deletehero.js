var express = require('express');
var router = express.Router();
var path = require('path');

var myApp = angular.module("myApp", ["ngRoute"]);


router.delete('/:id', function (req, res) {
  var id = req.params.id;
  hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
