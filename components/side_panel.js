

var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/side_panel.css">');

function vibrate(element_name){
	window.navigator.vibrate(100);
	if (window.notification){
		window.notification.vibrate(100);
	}
	console.log('vibrating');
	console.log("click:"+element_name);
	event_emitter.emit("click:"+element_name);

}

function generate_element (index){
	var element_name = "settings"+index;
	return React.createElement("div",{onClick:()=>vibrate(element_name),key:index,className:"components_side_panel_sp_element"}, "Settings")
}

var panel = React.createClass({

    render: function(){
			
            var elements = [ ] ;
			
			for (var i = 0 ; i < 50; i++){
				elements.push(generate_element(i));
			}
            var inner = React.createElement('div',{className:"components_side_panel_inner_text"},elements);
			var side_panel = React.createElement("div",{className:"components_side_panel"},inner);
			return side_panel;
        }        
    });

module.exports = panel;
