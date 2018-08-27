var events=require('events');
var eventEmitter=new events.EventEmitter();
var myEventHandler=function(){
	console.log('I Am Batman');
}
eventEmitter.on('Batman',myEventHandler);
eventEmitter.emit('Batman');