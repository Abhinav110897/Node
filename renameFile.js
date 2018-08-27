var fs=require('fs');
fs.open('newFile.txt','w',function(err){
	if(err)throw err;
	console.log('File Opened!!!');
	});
fs.rename('newFile.txt','renamedFile.txt',function(err){
	if(err)throw err;
	console.log('File Renamed');
	});