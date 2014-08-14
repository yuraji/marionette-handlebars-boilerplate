define([],function(){

	return Marionette.ItemView.extend({
		template: _.template('<p><%= name %> <%= surname %></p>')
	});

});