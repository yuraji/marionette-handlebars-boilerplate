define([
	'app',
	'hbs!pages/user/userPageTpl',
	'models/User',
	'pages/user/UserInfoView',
	'semantic'],function( app, tpl, User, UserInfoView ){

	return Marionette.LayoutView.extend({

		template: tpl,

		events: {
			"click .tabular.menu .item": "switchTab"
		},

		ui: {},

		regions: {
			userinfo: "#userinfo"
		},

		initialize: function( config ){
			_.bindAll(this, 'renderInfo');

			this.config = config;

			this.model = new User({ id: config.userId });
		},

		onRender: function(){
			

			this.listenTo( this.model, 'sync', this.renderInfo );
			this.model.fetch();

		},
		renderInfo: function(){

			this.userinfo.show( new UserInfoView({ model: this.model }) );

		}




	});


});