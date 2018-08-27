var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	fs.appendFile('newFile.txt','Content of the file',function(err){
		if(err)throw err;
		console.log('Done!!!!!');
	});

}).listen(8080);