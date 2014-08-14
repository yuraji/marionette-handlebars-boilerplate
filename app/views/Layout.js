define(['marionette', 'app',
	'hbs!templates/layout'
	],function(Marionette, app, tpl){

	return Marionette.LayoutView.extend({

		className: 'beacon',
		
		template: tpl,

		regions: {
			menuPanel: "#menuPanel",
			content: '#content'
		},

		onRender: function(){

			var _this = this;

			require(['views/NavPanel'], function(NavPanel){
				_this.menuPanel.show( new NavPanel() );
			});

		}

	});

	

});