


var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/event_panel.css">');


var panel = React.createClass({

    render: function(){
			var side_panel = <div className="components_event_panel_inner_text">hello world</div>;
			return side_panel;               
    }
});

module.exports = panel;
