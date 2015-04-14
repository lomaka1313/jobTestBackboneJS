define(['backbone'], function(Backbone){

    var appController = Backbone.Router.extend({
            initialize: function (options) {
                this.model = options.model;
            },

            routes: {
                "" : "dummyTable",
                "dummyTable": "dummyTable", 
                "dummyChart": "dummyChart", 
                "dummyList": "dummyList",
            },


            dummyTable: function () {
                console.log("dummyTable");
                var self = this;
	                this.model.fetch({
	                	url : "data/tabs.json",
	                	success: function(model,response){
						    require(['appModels/appModel', 'appViews/TableView',], function(appModel, TableView) {
											self.appModel = new appModel();
	                						self.appModel.set('tab', response[0]);
	                						//console.log(self.appModel.get("tab"))
											var view = new TableView({ model: self.appModel});
											self.appModel.trigger('change');
					    }
				    )}
				});
            },

            dummyChart: function () {
				console.log("dummyChart");
				var self = this;
	                this.model.fetch({
	                	url : "data/tabs.json",
	                	success: function(model,response){
						    require(['appModels/appModel', 'appViews/ChartView',], function(appModel, ChartView) {
											self.appModel = new appModel();
	                						self.appModel.set('tab', response[1]);
											var view = new ChartView({ model: self.appModel});
											self.appModel.trigger('change');
					    }
				    )}
				});
            },

            dummyList: function () {
                console.log("dummyList");
                var self = this;
	                this.model.fetch({
	                	url : "data/tabs.json",
	                	success: function(model,response){
						    require(['appModels/appModel', 'appViews/ListView',], function(appModel, ListView) {
											self.appModel = new appModel();
	                						self.appModel.set('tab', response[2]);
											var view = new ListView({ model: self.appModel});
											self.appModel.trigger('change');
					    }
				    )}
				});
            },
    })

    return appController;
});