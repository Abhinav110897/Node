var http=require('http');
var fs=require('fs');
//writeFile replaces content whereas appendFile adds content
http.createServer(function(req,res){
	fs.appendFile('newFile.txt','This is other content',function(err){
		if(err)throw err
		console.log('File Written');
	});
}).listen(8080);