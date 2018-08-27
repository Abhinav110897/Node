var fs=require('fs');
	fs.unlink('newFile.txt',function(err){
	if(err)throw err;
	console.log('File Deleted!');
	});
