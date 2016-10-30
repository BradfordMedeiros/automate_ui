


var react = require("react");
var $ =  require("jquery");
var mqtt_interface = require("../mqtt_widget.js")

$('head').append('<link rel="stylesheet" type="text/css" href="widgets/temperature_display.css">');


var TemperatureDisplay = react.createClass({

	updateTemperature: function(new_temperature){
		this.setState({temperature:new_temperature});
	},
	getInitialState: function(){
		return {temperature:0};
	},
	render: function(){

        return (<div className="widgets_temperature_display_outer" >
                      <div className="widgets_temperature_display_text">{this.state.temperature}</div> 
                </div>)
    }
	
});


var temperature_widget = function(){   
    var self = this;
	
	
    this.component = react.createElement(TemperatureDisplay,{ temperature:50 ,className: "widgets_temperature_display"} );
    this.fullscreen_component = null;
    this.on_subscription= function(subscriptions){
		if (subscriptions["temperature"]){
		    this.component.updateTemperature(subscriptions['temperature'])
		}else{
			console.log("warning receiving subscription for topic not subscribed to ",subscriptions);
		}
    };
    
 
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return ["temperature"];
    };
    
    this.get_react_component = function(){
        return this.component;
    };
	
	this.get_fullscreen_react_component = function(){
		return this.fullscreen_component;
	};
};
temperature_widget.prototype = mqtt_interface.prototype;

module.exports =  temperature_widget;
