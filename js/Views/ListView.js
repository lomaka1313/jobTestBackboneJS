define([    'backbone' ], function(Bakbone) {
	var ListView =  Backbone.View.extend({ 
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
		},
		template: _.template('<ul><li><%= tab["title"] %></li></ul>'),
		el: $("#container"),
		render: function() {
			this.$el.html(this.template( this.model.toJSON() ));   
			}  
		}) 
	return ListView;
});