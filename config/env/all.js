'use strict';

module.exports = {
    app: {
        title: 'PSUCLASS',
        description: 'An replacement for lionpath by c0dezlee',
        keywords: ''
    },
    port: process.env.PORT || 3000,
    templateEngine: 'swig',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    assets: {
  			lib: {
  					css: [
  							'public/lib/bootstrap/dist/css/bootstrap.min.css',
  							'public/lib/metisMenu/dist/metisMenu.min.css',
  							'public/lib/datatables/media/css/dataTables.bootstrap.min.css',
  							'public/lib/fontawesome/css/font-awesome.min.css'
  					],
  					js: [
  							'public/lib/jquery/dist/jquery.min.js',
  							'public/lib/angular/angular.min.js',
  							'public/lib/bootstrap/dist/js/bootstrap.min.js',
  							'public/lib/metisMenu/dist/metisMenu.min.js',
  							'public/lib/PACE/pace.min.js',
  							'public/scripts.js',
  							'public/lib/angular-resource/angular-resource.min.js',
  							'public/lib/angular-cookies/angular-cookies.min.js',
  							'public/lib/angular-animate/angular-animate.min.js',
  							'public/lib/angular-touch/angular-touch.min.js',
  							'public/lib/angular-sanitize/angular-sanitize.min.js',
  							'public/lib/angular-ui-router/release/angular-ui-router.min.js',
  							'public/lib/angular-ui-utils/ui-utils.min.js',
  							'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
  							'public/lib/datatables/media/js/jquery.dataTables.min.js',
  							'public/lib/angular-datatables/dist/angular-datatables.min.js',
  							'public/lib/datatables/media/js/dataTables.bootstrap.min.js'
  					]
  			},
  			css: [
  					'public/modules/**/css/*.css'
  			],
  			js: [
  					'public/config.js',
  					'public/application.js',
  					'public/modules/*/*.js',
  					'public/modules/*/*[!tests]*/*.js'
  			],
  			tests: [
  					'public/lib/angular-mocks/angular-mocks.js',
  					'public/modules/*/tests/*.js'
  			]
  	}
  };
