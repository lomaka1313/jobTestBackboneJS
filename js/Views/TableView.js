define(['backbone' ], function(Bakbone) {
	var TableView =  Backbone.View.extend({ 
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
		},
		template: _.template('<table><tr><td><%= tab["title"] %></td></tr></table>'),
		el: $("#container"),
		render: function() {
			this.$el.html(this.template( this.model.toJSON() ));   
			}  
		}) 
	return TableView;
});