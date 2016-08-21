

var mqtt_widget_manager = require("./mqtt_widget_manager.js");

var client_mock = function(){
    
    this.subscriptions = [ ]
    this.subscribe = function(subscription){
        this.subscriptions.push(subscription);
    };
    
    this.publish = function(){
    
    };
};

describe ('adding and removing widgets', function(){
    
    var the_client = new client_mock();
    var widget_manager = new mqtt_widget_manager(the_client);
    
    it("throws an exception when we add something that is not a widget");
    it("adds subscriptions for the mqtt widget");
    it("does not double subscribe when we add different widgets that subscribe to same topics");

});

describe("calling the callbacks for the added widgets", function(){
    
});
