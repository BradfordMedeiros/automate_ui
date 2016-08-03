angular.module('mqtt_widget', ['widgetGrid'])
.controller('mqtt_controller', function ($scope, $timeout) {
  var vm = this;
  
  vm.columns = 30;
  vm.rows = 21;
  
})
.directive('randomBgColor', function () {
  return {
    link: function (scope, element) {
      var r = Math.floor(Math.random() * 60) + 130,
          g = Math.floor(Math.random() * 60) + 130,
          b = Math.floor(Math.random() * 60) + 130;
      var bgColor = 'rgb(' + r + ',' + g + ',' + b + ')'; 
      element.css('background-color', bgColor);
    }
  };
})




