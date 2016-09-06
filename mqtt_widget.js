

/**
    Interface to implement for an mqtt widget.  You should set your widget.prototype = mqtt_interface.prototype
    Certain functions will check that you implement these functions by doing instance of.  
**/
var mqtt_interface = function(publish_function){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};
mqtt_interface.prototype.on_subscription = function(subscriptions,message){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

// returns the subscriptions that we need to get to update this widget
mqtt_interface.prototype.get_subscriptions  = function(){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

// sets the controller for your interface
// should only be called by external code 
mqtt_interface.prototype.create_controller = function($scope){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

module.exports = mqtt_interface;

