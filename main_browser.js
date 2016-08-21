(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

mqtt_interface = require("./mqtt_widget.js");
temperature_display = require("./widgets/temperature_display.js");
mqtt_color_widget = require("./widgets/color_widget.js");

initialize = function(app){


    wid = new temperature_display();
    color = new mqtt_color_widget();
    
    wid.initialize(app);
    color.initialize(app);
// need to create custom directive or mqtt widget

};

},{"./mqtt_widget.js":2,"./widgets/color_widget.js":3,"./widgets/temperature_display.js":4}],2:[function(require,module,exports){


/**
    Interface to implement for an mqtt widget.  You should set your widget.prototype = mqtt_interface.prototype
    Certain functions will check that you implement these functions by doing instance of.  
**/
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

module.exports = mqtt_interface;


},{}],3:[function(require,module,exports){

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
                template: function(){ console.log('generated color template'); return self.get_template()}
            };
        });
    }
};
mqtt_color_widget.prototype = mqtt_interface.prototype;


module.exports= mqtt_color_widget;
},{"../mqtt_widget.js":2}],4:[function(require,module,exports){

var mqtt_interface = require("../mqtt_widget.js");
var mqtt_wid = function(publish_function){   
    var self = this;
    this.on_subscription= function(subscription){
        // this is the override
        if (subscription['temp'] !==undefined){
            self.scope.$apply(function(){
                self.scope.temp = subscription['temp']
            });
        }
    };
    
    this.get_template = function(){
        return "<div>  temperature <hr> <h2>{{temp}}<h2> </div>";
    };
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return ["temperature"];
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
},{"../mqtt_widget.js":2}]},{},[1]);
