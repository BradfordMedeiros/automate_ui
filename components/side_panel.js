

var React = require("../build/react.js");

var panel = React.createClass({
         
  
    render: function(){
            //<div id="side_panel">
			//<div class="sp_element">Connect &#x23FB;</div>
			//<div class="sp_element">Settings</div>
            //<div class="sp_element">Settings</div>
            
            var elements = [    React.createElement("div",{key:0,className:"sp_element"}, "Connect"),
                                React.createElement("div",{key:1,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:2,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:3,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:4,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:5,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:6,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:7,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:8,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:9,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:10,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:11,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:12,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:13,className:"sp_element"}, "Settings"),
                                React.createElement("div",{key:14,className:"sp_element"}, "Settings1")
                            ] ;
            return React.createElement('div',{id:"side_panel"},elements);
        }
        
    });

var the_side_panel = React.createElement(panel,{});

window.the_side_panel = the_side_panel;
