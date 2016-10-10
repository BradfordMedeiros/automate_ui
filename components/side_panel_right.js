

var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

//$('head').append('<link rel="stylesheet" type="text/css" href="components/side_panel.css">');



var panel = React.createClass({

    render: function(){
			
            var elements = [ ] ;
			
			for (var i = 0 ; i < 5; i++){
				elements.push( React.createElement("div",{key:i,className:"components_side_panel_sp_element"}, "Settings "+i));
			}
            var inner = React.createElement('div',{className:"components_side_panel_inner_text"},elements);
			var side_panel = React.createElement("div",{className:"components_side_panel"},inner);
			return side_panel;
        }        
    });

module.exports = panel;
