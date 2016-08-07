var app = angular.module('widgetGridDemo', ['widgetGrid']);

app.controller('DemoController', function ($scope, $timeout) {
  var vm = this;
  
  vm.columns = 30;
  vm.rows = 20;
  
  vm.editable = false;
  vm.additionPossible = true;
  
  vm.options = {
    showGrid: false,
    highlightNextPosition: false
  };
  
  vm.greetingWidgets = [{
    position: { top: 1, height: 9, left: 1, width: 12 },
    text: 'Hi!'
  },{
    position: { top: 8, height: 13, left: 16, width: 15 },
    text: 'Hello!'
  },{
    position: { top: 1, height: 5, left: 23, width: 8 },
    text: 'Servus!'
  },{
    position: { top: 10, height: 7, left: 9, width: 7 },
    text: 'Salut!'
  }];
  
  vm.addWidget = addWidget;
  vm.removeWidget = removeWidget;
  vm.toggleEditable = toggleEditable;
  
  updateGridSize();
  window.onresize = updateGridSize;
  
  $scope.$on('wg-grid-full', function () {
    vm.additionPossible = false;
  });
  
  $scope.$on('wg-grid-space-available', function () {
    vm.additionPossible = true;
  });
  
  $scope.$on('wg-update-position', function (event, widgetInfo) {
    console.log('A widget has changed its position!', widgetInfo);
  });
  
  var greetings = ['Hola!', 'Hey!', 'Bonjour!', 'Servus!', 'Hello!'];
  function addWidget() {
    if (vm.additionPossible) {    
      var greeting = greetings[Math.floor(Math.random() * greetings.length)];
      var widget = {
        position: null,
        text: greeting
      };
      vm.greetingWidgets.push(widget);
    }
  }
  
  function removeWidget(widget) {
    var idx = vm.greetingWidgets.indexOf(widget);
    if (idx > -1) {
      vm.greetingWidgets.splice(idx, 1);
    }
  }
  
  function toggleEditable() {
    vm.editable = !vm.editable;
    vm.options.showGrid = vm.editable;
  }
  
  function updateGridSize() {
    $timeout(function () {
      var grid = document.getElementById('demo-grid');
      vm.gridWidth = grid.clientWidth;
      vm.gridHeight = grid.clientHeight;
    });
  }
})





var mqtt_interface = function(mqtt_topics, publish_function){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};
mqtt_interface.prototype.on_subscription = function(subscriptions,message){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

// sets the controller for your interface
// should only be called by external code 
mqtt_interface.prototype.create_controller = function($scope){
    throw (new Error("cannot implement an interface directly - extend the prototype chain and override methods"));
};

// probably
// mqtt_interface.prototype.generate_reusable_html() ---> and then can just link to this
var do_something_mqtt = function(mqtt_int){
    if (!(mqtt_int instanceof mqtt_interface)){
        throw (new Error("must implement interface"));
    }
};

var x = {val: 20};
var mqtt_wid = function(publish_function){
    
    var self = this;
    this.on_subscription= function(subscription){
        // this is the override
        if (subscription['temp']){
            self.scope.$apply(function(){
                self.scope.temp = subscription['temp']
            });
        }
    };
    
    this.get_template = function(){
        return "<div> temperature:  {{temp}}--</div>";
    };
    // gets the subscriptions we care about for this controller
    this.get_subscriptions = function(){
        return "temperature";
    };
    
    this.create_controller = function(app){
        var self = this;
        
        var controller_name = "the_test_controller";
        var controller = app.controller(controller_name,function($scope){
            $scope.temp = 0;
            
            self.scope = $scope;
           
        });
        return controller_name;
    };
};


mqtt_wid.prototype = mqtt_interface.prototype;





r = new mqtt_wid();
app.directive("test",function(){
    var controller_name = r.create_controller(app);
    console.log("controller : ",controller_name);
    return {
        template: r.get_template(),
        controller: controller_name
    };
});








