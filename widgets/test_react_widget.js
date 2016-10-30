
var react = require("react");
var $ = require("jquery");
$('head').append('<link rel="stylesheet" type="text/css" href="widgets/test_react_widget.css">');

var mqtt_interface = require("../mqtt_widget.js")

function test_function(){
	console.log("inner widget click recognized");
}
var test_widget_component = react.createClass({
	
	render(){
		return react.createElement("p",{ onClick: test_function, className: "widgets_test_react_widget"},"hello world");
	}

});

var test_widget_fullscreen = react.createClass({

	render(){
		return react.createElement("div",{className:"widgets_test_react_widget_fullscreen"},"fullscreen example");
	}
});

var test_react_wid = function(){   
    var self = this;
	
	
    this.component = react.createElement(test_widget_component,{ className: "widgets_test_react_widget"} );
    this.fullscreen_component = react.createElement(test_widget_fullscreen);
    this.on_subscription= function(subscription){
       
    };
    
 
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return [];
    };
    
    this.get_react_component = function(){
       
        return this.component;
    };
	
	this.get_fullscreen_react_component = function(){
		return this.fullscreen_component;
	};
};
test_react_wid.prototype = mqtt_interface.prototype;
module.exports =  test_react_wid;