define([],function(){

	return Backbone.Model.extend({

		url: '/api/user.json',
		defaults: {
			id: null,
			name: '',
			surname: ''
		}

	});
});