

var mqtt = require("mqtt");
var mqtt_widget = require("./mqtt_widget");



var client = mqtt.connect("mqtt://localhost");


var mqtt_widgets_manager = function(){
    this.the_subscriptions = { };
    this.id_count = 0;
};

mqtt_widgets_manager.prototype.add_widget = function(widget){
    if (typeof(mqtt_widget) !== typeof(widget)){
        throw (new Error("Cannot add a widget that does not implement the mqtt widget interface")):
    }
    
    var the_subscriptions = widget.get_subscriptions();
    for (var i = 0 ; i < subscriptions.length ; i++){
        this._add_subscription(client,widget);
    }
};

mqtt_widgets_manager.prototype.remove_widget = function(widget){
    if (typeof(mqtt_widget) !== typeof(widget)){
        throw (new Error("Cannot remove a widget that does not implement the mqtt widget interface")):
    }
    
    var the_subscriptions = this.subscriptions;
    var the_keys = Object.keys(the_subscriptions);
    for (var i = 0 ; i < the_keys.length; i++){
    
        var the_new_subscriptions = [ ]
        for (var j = 0 ; i  < the_subscriptions[the_keys[i]].length;i++){    
            if (the_subscriptions[the_keys[i]][j] !== widget){
                the_new_subscriptions.push(the_subscriptions[the_keys[i]][j])
            }
        }
        the_subscriptions[the_keys[i]] = the_new_subscriptions;
    }
};

mqtt_widgets_manager.prototype._add_subscription(client, widget){
    if (client == undefined || widget == undefined){
        throw (new Error("undefined parameters in add subscription));
    }
    var the_subscriptions = [].concat(widget.get_subscriptions());
    for (var i = 0 ; i < subscriptions.length ; i++){
        the_subscriptions[subscriptions[i]].push(widget)
        console.log("WARNING NEED TO ACTUALLY SUBSCRIBE TO MQTT TOPIC HERE");
    }
};

mqtt_widgets_manager.prototype._remove_subscription(client, subscriptions){
    var the_subscriptions = [ ].concat(subscriptions);
    for (var i = 0 ; i < subscriptions.length ; i++){
        the_subscriptions[subscr
    }
};



