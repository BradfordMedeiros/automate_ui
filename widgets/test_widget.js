
var mqtt_interface = require("../mqtt_widget.js");
var test_action_widget = function(publish){
    
    var self = this;
    this.publish = publish;
    
    this.on_subscription= function(subscription){

    };
    
    this.get_template = function(){
        return "<div style='height: 100%'><div class='testwid0'>test action widget</div></div>";
    };
    
    // none we be creating an action widget!
    this.get_subscriptions = function(){
        return [];
    };
    
    this.create_controller = function(app){
        var controller_name = "test_action_widget_controller";
        var controller = app.controller(controller_name,function($rootScope){
            
        });
        return controller_name;
    };

    this.initialize = function(app){
        var the_controller = self.create_controller(app);
        console.log('created controller ');
        app.directive("actionwid",function(){
            console.log("controller : ",the_controller);
            return{
                controller: the_controller,
                link: function(scope,elem,attrs){
                    angular.element(elem[0].querySelector(".testwid0")).bind("click",function(){
                        console.log("test wid clicked");
                        self.publish("/actions/test", Math.random()*100+'');
                    });
                },
                template: function(){ console.log('generated color template'); return self.get_template()}
            };
        });
    }
};
test_action_widget.prototype = mqtt_interface.prototype;

module.exports= test_action_widget;