
var mqtt_interface = function(mqtt_topics, publish_function){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};
mqtt_interface.prototype.on_subscription = function(subscriptions,message){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

// sets the controller for your interface
// should only be called by external code 
mqtt_interface.prototype.create_controller = function($scope){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

// probably
// mqtt_interface.prototype.generate_reusable_html() ---> and then can just link to this
var do_something_mqtt = function(mqtt_int){
    if (!(mqtt_int instanceof mqtt_interface)){
        throw (new Error("must implement interface"));
    }
};

var x = {val: 20};
var mqtt_wid = function(publish_function){
    
    var self = this;
    this.on_subscription= function(subscription){
        // this is the override
        if (subscription['temp']){
            self.scope.$apply(function(){
                self.scope.temp = subscription['temp']
            });
        }
    };
    
    this.get_template = function(){
        return "<div> temperature:  {{temp}}--</div>";
    };
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return "temperature";
    };
    
    this.create_controller = function(app){
        var controller_name = "test_controller";
        var controller = app.controller(controller_name,function($scope){
            $scope.temp = 0;
            self.scope = $scope;
        });
        return controller_name;
    };

    this.initialize = function(app){
        var the_controller = self.create_controller(app);
        app.directive("test",function(){
            var controller_name = r.create_controller(app);
            console.log("controller : ",controller_name);
            return{
                controller: the_controller,
                template: function(){ console.log('generated'); return self.get_template()}
            };
        });
    }
};



mqtt_wid.prototype = mqtt_interface.prototype;

var initialize = function(app){


    r = new mqtt_wid();
    r.initialize(app);
// need to create custom directive or mqtt widget

};


/*app.directive('randomBgColor', function () {
  return {
    link: function (scope, element) {
      var r = Math.floor(Math.random() * 60) + 130,
          g = Math.floor(Math.random() * 60) + 130,
          b = Math.floor(Math.random() * 60) + 130;
      var bgColor = 'rgb(' + r + ',' + g + ',' + b + ')'; 
      element.css('background-color', bgColor);
    },
   //restrict: 'E',
    template: function(e,a){
        console.log('e is ',e);
        console.log('a is ',a);
        return r.get_template();
    }
  };
})*/





