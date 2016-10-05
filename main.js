/**
    Shitty disposable main method so we have access to this stuff from the console
**/
mqtt_interface = require("./mqtt_widget.js");
temperature_display = require("./widgets/temperature_display.js");
mqtt_color_widget = require("./widgets/color_widget.js");
test_action_widget = require("./widgets/test_widget.js");
angular  = require("angular");
mqtt_widget_manager = require("./mqtt_widget_manager.js");

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:3000");

manager = new mqtt_widget_manager(client);
wid = new temperature_display(client.publish.bind(client));
color = new mqtt_color_widget(client.publish.bind(client));
action = new test_action_widget(client.publish.bind(client));
widgets = [wid,action]    

initialize = function(app){
    
    for (var i = 0 ; i < widgets.length; i++){
        widgets[i].initialize(app);
    }  
    
    for ( var i = 0 ; i < widgets.length ; i++){
        manager.add_widget(widgets[i]);
    }
    
};

