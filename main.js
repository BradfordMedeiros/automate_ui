/**
    Shitty disposable main method so we have access to this stuff from the console
**/
mqtt_interface = require("./mqtt_widget.js");
temperature_display = require("./widgets/temperature_display.js");
mqtt_color_widget = require("./widgets/color_widget.js");

initialize = function(app){


    wid = new temperature_display();
    color = new mqtt_color_widget();
    
    wid.initialize(app);
    color.initialize(app);
};
