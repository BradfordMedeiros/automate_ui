/**
    Shitty disposable main method so we have access to this stuff from the console
**/
import mqtt_interface from "./mqtt_widget.js";
import temperature_display from "./widgets/temperature_display.js";
import mqtt_color_widget from "./widgets/color_widget.js";

import mqtt from "mqtt";
import test_action_widget from "./widgets/test_widget.js";
import mqtt_widget_manager from "./mqtt_widget_manager.js";

import { components } from "./component_main.js";

import jquery from "jquery";
import react from "react";
import reactDom from "react-dom";
import widgets from "./widget_main.js";

window.$ = jquery;
window.React = react;
window.ReactDOM = reactDom;
window.components = components;
window.widgets = widgets;


console.log("components ",components);
console.log("jquery: ",jquery);

var client = mqtt.connect("mqtt://localhost:3000");

let manager = new mqtt_widget_manager(client);
let wid = new temperature_display(client.publish.bind(client));
let color = new mqtt_color_widget(client.publish.bind(client));
let action = new test_action_widget(client.publish.bind(client));
let the_widgets = [wid,action]    

let initialize = function(app){
    
    for (var i = 0 ; i < widgets.length; i++){
        the_widgets[i].initialize(app);
    }  
    
    for ( var i = 0 ; i < widgets.length ; i++){
        manager.add_widget(widgets[i]);
    }
    
};

