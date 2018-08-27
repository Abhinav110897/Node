var http=require('http');
var fs=require('fs');
var url=require('url');
var uc=require('upper-case');
http.createServer(function(req,res){
	var q=url.parse(req.url,true);
	var filename="."+q.pathname;
	fs.readFile(filename,function(err,data){
		if(err){
		res.writeHead(404,{'Content-Type':'text/html'});
		return res.write();
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(uc(data));
		return res.end();
	});
}).listen(8080);