
var mqtt_interface = require("../mqtt_widget.js");
var mqtt_wid = function(publish_function){   
    var self = this;
    this.on_subscription= function(subscription){
        // this is the override
        
        console.log("received subscription");
        the = subscription;
        if (subscription['/states/temperature'] !==undefined){
            self.scope.$apply(function(){
                self.scope.temp = subscription['/states/temperature']
            });
        }else{
            console.log("warning received subscription for a topic not subscribed to");
        }   
    };
    
    this.get_template = function(){
        return "<div>  temperature <hr> <h2>{{temp}}<h2> </div>";
    };
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return ["/states/temperature"];
    };
    
    this.create_controller = function(app){
        var controller_name = "test_controller";
        var controller = app.controller(controller_name,function($rootScope){
            $rootScope.temp = 0;
            self.scope = $rootScope;
        });
        return controller_name;
    };

    this.initialize = function(app){
        var the_controller = self.create_controller(app);
        console.log('created controller ');
        app.directive("test",function(){
            console.log("controller : ",the_controller);
            return{
                controller: the_controller,
                template: function(){ console.log('generated'); return self.get_template()}
              
            };
        });
    }
};
mqtt_wid.prototype = mqtt_interface.prototype;

module.exports = mqtt_wid;