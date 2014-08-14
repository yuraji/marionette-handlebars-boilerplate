define([ 'app',
	'hbs!templates/navPanel'],function( app, tpl ){

	return Marionette.LayoutView.extend({
		template: tpl,
		events: {
			'click .item[data-tab]': 'onTabClick',
			'click @ui.searchBtn': 'search',
			'keyup @ui.searchInput': 'onSearchKeyup',
		},

		ui: {
			searchInput: '[data-role="searchInput"]',
			searchBtn: '[data-role="searchBtn"]',
		},

		initialize: function(){
			_.bindAll(this, 'onSearchKeyup', 'search', 'setSearchPlaceholder');

			this.listenTo(app, 'user:render', this.activateTab);

		},

		onShow: function(){

			this.listenTo(app, 'activateTab', this.activateTab);
			this.activateTab(app.getCurrentRoute() );

			app.commands.setHandler('set:search:placeholder', this.setSearchPlaceholder );

		},

		setSearchPlaceholder: function( text ) {
			this.ui.searchInput.attr('placeholder', text);
		},

		onTabClick: function( evt ){

			var tabName = $(evt.currentTarget).data('tab');

			app.trigger('navigate', tabName);

		},

		activateTab: function( tabName ) {

			var $itemToActivate = this.$('[data-tab="'+tabName+'"]');

			this.$('.item.active').removeClass('active');

			if( $itemToActivate.length ) {
				$itemToActivate.addClass('active');
			}


		},


		search: function(){

			app.commands.execute('search', this.ui.searchInput.val() );

		},

		onSearchKeyup: function( evt ) {
			if( evt.keyCode == 13 ){
				evt.preventDefault();
				this.search();
			}
		}
	});

});