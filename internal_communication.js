

var event_emitter = require('events');
var emitter = new event_emitter;


for (var i = 0 ; i < 10;i++){
	emitter.on ("click:"+"settings"+i,function(){
		((index)=>{
			console.log('got on click event ',"settings"+index);
		})(i);
	});
}



module.exports = emitter;