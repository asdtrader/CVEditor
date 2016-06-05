var express = require('express');
var router = express.Router();
var jsonUtil = require('../public/javascripts/util.js');
var CNST = require('../public/javascripts/constants.js');


/* GET home page. */
router.get('/', function(req, res, next) {

    jsonUtil.loadJson("../public/data/data.json", function (err, json) {
        if (err)
            console.error(err);
        else {
            console.log(json);
            //var jsonData = JSON.parse(json);
            console.log(json[0].doc_title);

            res.render('index', {
                title: json[0].doc_title,
                car_prof: "Some"
            });

            //jsonUtil.writeJson(JSON_DATA, jsonData, function (err) {
            //    if (err)
            //        console.error(err);
            //    else
            //        console.log(json);
            //});
        }

    });




});

module.exports = router;
