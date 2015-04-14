define([    'backbone' ], function(Bakbone) {
	var ChartView =  Backbone.View.extend({ 
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
		},
		template: _.template('<div><h2><%= tab["title"] %></h2></div>'),
		el: $("#container"),
		render: function() {
			this.$el.html(this.template( this.model.toJSON() ));   
			}  
		}) 
	return ChartView;
});