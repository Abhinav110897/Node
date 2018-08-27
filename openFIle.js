var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	fs.open('newFile.txt','w',function(err,file){
		if(err)throw err;
		console.log('Opened!!!');
	});
}).listen(8080);