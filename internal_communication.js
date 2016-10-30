

var event_emitter = require('events');
var emitter = new event_emitter;


emitter.on("widgets:add_widget",(widget)=>{
	console.log('got request to add',widget);
});

for (var i = 0 ; i < 10;i++){
	emitter.on ("click:"+"settings"+i,function(){
		((index)=>{
			console.log('got on click event ',"settings"+index);
		})(i);
	});
	
}


window.emitter = emitter;
module.exports = emitter;