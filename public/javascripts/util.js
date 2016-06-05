/**
 * Created by mac on 6/4/16.
 */

var fs = require('fs');

module.exports.loadJson = function (file, callback) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
        if (err) return callback(err);
        try {
            var json = JSON.parse(data);
            callback(null, json);
        } catch (ex) {
            callback(ex);
        }
    });
};

module.exports.writeJson = function (file, json, callback) {
    fs.writeFile(file, JSON.stringify(json), callback);
};

