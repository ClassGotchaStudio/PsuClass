'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	  mongoose = require('mongoose'),
    Course = mongoose.model('Course');

exports.create = function(req, res) {
  	var course = new Course(req.body);

    // Then save the course
    course.save(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        //TODO: return "Success";
      }
    });

}
exports.update = function(req, res) {
  var course = new Course(req.body);

  if (req.body.number) {
			Course.findOne({
        number: req.body.number
      }).exec(function(err, course) {
				if (!course) {
					return res.status(400).send({
						message: 'No course with that number has been found'
					});
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
           }
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
      }
   }
}

exports.search = function(req, res) {
  if (req.body.number) {
      Course.findOne({
        number: req.body.number
      }).exec(function(err, course) {
        if (!course) {
          return res.status(400).send({
            message: 'No course with that number has been found'
          });
        } else {
          return course;
        }
      }
   }
}
