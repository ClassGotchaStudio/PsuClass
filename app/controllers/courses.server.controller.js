'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Course = mongoose.model('Course');

exports.create = function(req, res) {
    var course = new Course(req.body);
    // Then save the course
    course.save(function(err) {
        if (err) {
            console.log("Failed!");
            console.log(err);
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            console.log("Success!");
            //TODO: return "Success";
        }
    });
}

exports.update = function(req, res) {
    var course = new Course(req.body.course_data[0]);
    if (req.body.number) {
        Course.findOne({
            number: req.body.number
        }).exec(function(err, course) {
            if (!course) {
                // return res.status(400).send({
                // 	message: 'No course with that number has been found'
                // });
                this.create(req, res);
            } else {
                course = _.extend(course, req.body);
                user.save(function(err) {
                    if (err) {
                        return res.status(400).send({
                            message: errorHandler.getErrorMessage(err)
                        });
                    } else {
                        // TODO return success
                    }
                });
            }
        });
    } else {
        return res.status(400).send({
            message: 'Number field is null'
        });
    }
}

exports.delete = function(req, res) {
    if (req.body.number) {
        Course.findOne({
            number: req.body.number
        }).exec(function(err, course) {
            if (!course) {
                return res.status(400).send({
                    message: 'No course with that number has been found'
                });
            } else {
                course.remove.exec();
            }
        });
    }
}

exports.search = function(req, res) {
    if (req.body != [] || req.body) {
      console.log(req.body);
        Course.
        find(req.body).
        sort({
            occupation: -1
        }).
        exec(function(err, course) {
            if (course.length === 0) {
                return res.status(400).send({
                    message: 'No course with that number has been found'
                });
            } else {
                return res.status(200).json(course);
            }
        });
    } else {
      return res.status(400).send({
        message: 'No data sent'
      })
    }
}
