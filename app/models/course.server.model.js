'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

/**
 * User Schema
 */
var CourseSchema = new Schema({
  number: {
		type: String
	},
	major: {
		type: String
	},
  name: {
		type: String
	},
	fullName: {
		type: String
	},
  section: {
    type: String
  },
	instructor1: {
		type: String
	},
  instructor2: {
    type: String
	},
	unit: {
		type: String
	},
  room: {
    type: String
  },
	time: {
		type: String
	},
  status: {
    type: String
  },
  capacity: {
    type: Number
  },
	description: {
		type: String
	},
  enrolled: {
    type: Number
  },
  waitlist: {
    type: Number
  },
  waitlistEnrolled: {
    type: Number
  },
	classType: {
		type: String
	}
});
mongoose.model('Course', CourseSchema);
