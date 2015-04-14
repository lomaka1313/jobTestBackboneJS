requirejs.config({
    baseUrl: "js/library",
    paths: {
        jquery: 'jquery',
        backbone: 'backbone',
        underscore: 'underscore',
        domready : 'domReady',
        appControllers: '../Controllers',
        appModels: '../Models',
        appViews: '../Views'
    },
    shim: {
        'underscore': {
            exports: '_'
        },		
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
require(['domready', 'appModels/appModel', 'appControllers/appController', 'jquery', 'backbone'], function(domReady, appModel,appController, $, Backbone){
	domReady(function () {
	    
	    var curloc = window.location.href;
	     
		var model = new appModel();

		var controller = new appController({ model: model});

		

        if(curloc == "https://jobtest-lomaka1313.c9.io/"){
            Backbone.history.start();
        }else{
            Backbone.history.start({pushState: true});
        }
	});
});