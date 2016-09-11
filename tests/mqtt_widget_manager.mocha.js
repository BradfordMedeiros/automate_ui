
var assert = require("assert");
var mqtt_widget_manager = require("./mqtt_widget_manager.js");
var mqtt_widget = require("./mqtt_widget.js");

var client_mock = function(){
    
    this.subscriptions = [ ]
    this.subscribe = function(subscription){
        this.subscriptions.push(subscription);
    };
    
    this.publish = function(){
    
    };
    
    this.clear = function(){
        this.subscriptions = [ ];
    };
};



describe ('adding and removing widgets', function(){
    
    var the_client = new client_mock();
    var widget_manager = new mqtt_widget_manager(the_client);
    
    it("throws an exception when we add something that is not a widget",function(){
        var throws_exception =  false;
        try{
            widget_manager.add_widget({});
        }catch(e){
            throws_exception = true;
        }
        
        assert.equal(throws_exception,true);
    });
    it("adds subscriptions for a single mqtt widget" , function(){
        
        the_client.clear();
        var test_widget = function(){};
        test_widget.prototype = mqtt_widget.prototype;
        test_widget.get_subscriptions = function(){
            return ["water","fire"];
        };
        widget_manager.add_widget(test_widget);

        
        var added_water = the_client.subscriptions.indexOf("water") >= 0;
        var added_fire = the_client.subscriptions.indexOf("fire") >= 0;
        assert.equal(added_fire,true);
        assert.equal(added_water,true);
        
        
    });
    
    it("adds subscriptions for multiple mqtt widgets");
    
    it("does not double subscribe when we add different widgets that subscribe to same topics", function(){  
        the_client.clear();
        var test_widget0 = function(){};
        test_widget0.prototype = mqtt_widget.prototype;
        test_widget0.get_subscriptions = function(){
            return ["water","fire"];
        };
        
        var test_widget1 = function(){};
        test_widget1.prototype = mqtt_widget.prototype;
        test_widget1.get_subscriptions = function(){
            return ["fire","ice"];
        };
        
        
        widget_manager.add_widget(test_widget0);
        widget_manager.add_widget(test_widget1);

        var found_fire = false;
        for (var i = 0 ; i < the_client.subscriptions.length; i++){
            if (the_client.subscriptions[i] == "fire"){
                assert.equal(found_fire,false);
            }else{
                found_fire = true;
            }
        }
        assert.equal(found_fire,true);
    });

});

describe("calling the callbacks for the added widgets", function(){
    
});
