var express = require('express');
var router = express.Router();
var jsonUtil = require('../public/javascripts/util.js');
var CONST = require('../public/javascripts/constants.js');

router.get('/', function(req, res, next) {

    jsonUtil.loadJson(CONST.JSON_DATA, function (err, json) {
        if (err)
            console.error(err);
        else {
            res.render('index', {
                title: json.jm_doc_title,
                jm_user_mail: json.jm_user_mail,
                jm_user_phone: json.jm_user_phone,
                jm_user_in: json.jm_user_in,
                jm_user_website: json.jm_user_website,
                jm_user_website_vs : json.jm_user_website_vs,
                jm_user_github: json.jm_user_github,
                jm_user_twitter: json.jm_user_twitter,
                jm_username: json.jm_username,
                jm_user_title: json.jm_user_title,
                jm_interests:json.jm_interests,
                jm_languages:json.jm_languages,
                jm_educations: json.jm_educations,
                jm_skills: json.jm_skills,
                jm_career_profile_summary: json.jm_career_profile_summary,
                jm_experiences: json.jm_experiences,
                jm_project_intro: json.jm_project_intro,
                jm_projects: json.jm_projects
            });
        }
    });
});

router.get('/json', function(req, res, next) {

    jsonUtil.loadJson(CONST.JSON_DATA, function (err, json) {
        if (err)
            console.error(err);
        else {
            if(req.query.val == "educations") {
                res.json(json.jm_educations);
            } else if(req.query.val == "languages") {
                res.json(json.jm_languages);
            } else if(req.query.val == "experiences") {
                res.json(json.jm_experiences);
            } else if(req.query.val == "skills") {
                res.json(json.jm_skills);
            } else if(req.query.val == "projects") {
                res.json(json.jm_projects);
            } else {
                res.json(null);
            }
        }
    });
});

router.get('/edit', function(req, res, next) {

    jsonUtil.loadJson(CONST.JSON_DATA, function (err, json) {
        if (err)
            console.error(err);
        else {
            res.render('edit', {
                title: json.jm_doc_title,
                jm_user_mail: json.jm_user_mail,
                jm_user_phone: json.jm_user_phone,
                jm_user_in: json.jm_user_in,
                jm_user_website: json.jm_user_website,
                jm_user_website_vs : json.jm_user_website_vs,
                jm_user_github: json.jm_user_github,
                jm_user_twitter: json.jm_user_twitter,
                jm_username: json.jm_username,
                jm_user_title: json.jm_user_title,
                jm_interests:json.jm_interests,
                jm_languages:json.jm_languages,
                jm_educations: json.jm_educations,
                jm_skills: json.jm_skills,
                jm_career_profile_summary: json.jm_career_profile_summary,
                jm_experiences: json.jm_experiences,
                jm_project_intro: json.jm_project_intro,
                jm_projects: json.jm_projects
            });
        }
    });
});


module.exports = router;
