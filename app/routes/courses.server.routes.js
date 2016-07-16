'use strict';

module.exports = function(app) {
	// Root routing
	var course = require('../../app/controllers/courses.server.controller');
	app.route('/course/create').post(course.create);
  app.route('/course/update').post(course.update);
  app.route('/course/delete').post(course.delete);
  app.route('/search').post(course.search);
};
//    app.put('/api/0.1/prof/:id', users.hasAuthorization(['admin']), prof.update);
