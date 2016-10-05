
var react = require("../build/react.js");

var mqtt_interface = require("../mqtt_widget.js");
var test_react_wid = function(){   
    var self = this;
    this.component = react.createElement("p",{},"this is a test component");
     
    this.on_subscription= function(subscription){
       
    };
    
 
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return [];
    };
    
    this.get_react_component = function(){
       
        return this.component;
    };
    
   
};
test_react_wid.prototype = mqtt_interface.prototype;
module.exports =  test_react_wid;