/**
*	Main Page Model
*/

define(['backbone'], function(Backbone){

	var appModel = Backbone.Model.extend({
		
		defaults: {
			tab : []
		},
		
		sync: function(method, model, syncOptions) {
			var self = this;

			$.ajax({
				type: 'GET',
				url: syncOptions.url,
				success: function(response) {
					if (response.error !== undefined) {
						alert(response.error);					
					}

					syncOptions.success(response);		
				},
				error: function (response, msg, error) {
				  alert(msg);
				},

				dataType: 'json'
			  });		
		},
		
		
	});

	return appModel;
});

