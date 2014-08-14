require.config({
	// baseurl: "/",
	// urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		app: "./app",
		bower: "../bower_components",
		lib: "../lib",
		jquery: "../bower_components/jquery/dist/jquery",
		underscore: "../bower_components/underscore/underscore",
		backbone: "../bower_components/backbone/backbone",
		'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
		'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
		marionette: "../bower_components/marionette/lib/backbone.marionette",
		hbs: "../bower_components/require-handlebars-plugin/hbs",
		semantic: "../bower_components/semantic/build/packaged/javascript/semantic"
	},
	shim: {
		handlebars: {
			exports: "Handlebars"
		}
	},
	deps: [
		'marionette',
		'hbs'
	],
	callback: function(){
		require(['app'], function(app){
			app.start();
		});
	},
	hbs: { // require-handlebars-plugin
		helpers: true
	}
})