
var mqtt_interface = require("../mqtt_widget.js");
var mqtt_color_widget = function(){
    
    var self = this;
    this.on_subscription= function(subscription){
        // this is the override
        if (subscription['color'] !==undefined){
            self.scope.$apply(function(){
                self.scope.color = subscription['color']
            });
        }
    };
    
    this.get_template = function(){
        return "<div style='background: {{color}}; height: 100%'>yo yo </div>";
    };
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return ["color"];
    };
    
    this.create_controller = function(app){
        var controller_name = "color_controller";
        var controller = app.controller(controller_name,function($rootScope){
            $rootScope.color = "blue";
            self.scope = $rootScope;
        });
        return controller_name;
    };

    this.initialize = function(app){
        var the_controller = self.create_controller(app);
        console.log('created controller ');
        app.directive("mqttcolor",function(){
            console.log("controller : ",the_controller);
            return{
                controller: the_controller,
                link: function(scope,elem,attrs){
                    /*console.log("linking ");
                    console.log(angular);
                    angular.element(attrs.options).css({'border': '10px solid grey'}); //    border: 5px solid grey;
                    */
                    elem.bind("click",function(){
                        console.log("temp thing clicked");
                        self.on_subscription({"color": "orange"});
                    });
                },
                template: function(){ console.log('generated color template'); return self.get_template()}
            };
        });
    }
};
mqtt_color_widget.prototype = mqtt_interface.prototype;

module.exports= mqtt_color_widget;