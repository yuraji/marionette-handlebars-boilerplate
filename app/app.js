define(['marionette',
	'views/Layout',
	//'lib/jquery.address', // -- only needed for "history" feature of the SemanticUI-Tab
	'semantic'], function(marionette, Layout){ "use strict"

	Marionette.Behaviors.behaviorsLookup = function() {
		return window.Behaviors;
	}
	window.Behaviors = {}


	var app = new marionette.Application();

	app.addRegions({
		rootNode: 'body'
	});



	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			"": "home",
			"user/:id": 'user'
		},
	});



	var API = {
		home: function(){
			console.log("%c|--------------- PAGE: Home ---------------|", "color: blue");

			// app.navigate('requests');

			// API.requests();

			$('#menuPanel').show();
		},

		user: function(userId){

			console.log("%c|--------------- PAGE: User ---------------|", "color: blue;");

			require(['pages/user/UserPage'], function(UserPageView){
				app.layout.content.show( new UserPageView({ userId: userId }) );
			});

		}
	};



	app.addInitializer(function(){
		new Router({
			controller: API
		});
	});



	app.on('start', function(config){

		app.layout = new Layout();

		this.listenTo(app.layout, 'render', function(){

			if(Backbone.history) {
				Backbone.history.start({pushState: false, root:'/aml/'});
				console.log('Backbone.history started');
			}
		});

		app.rootNode.show( app.layout );
	});


	app.on('navigate', function( path ){
		app.navigate( path );

		var params = path.split('/');
		var route = params.shift();

		if(_.isFunction(API[route])){
			// console.log('[navigate] apply route:', route, params);
			API[route].apply(this, params);
		}
	});


	app.navigate = function(route,	options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	};



	app.getCurrentRoute = function(){
		return Backbone.history.fragment
	};


	return app;

});