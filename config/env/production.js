'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/psuclass',
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
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
