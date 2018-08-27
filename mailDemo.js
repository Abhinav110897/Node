var nodemailer=require('nodemailer');
var transport=nodemailer.createTransport({
	service:'gmail',
	auth:{
	user:'abhinavsrivastava10897@gmail',
	pass:'sriabhinav110897'
	}
});
var mailOption={
	from:'abhinavsrivastava10897@gmail',
	to:'abhinavsrivastava10897@gmail',
	subject:'Sending Email via NODE',
	text:'Hey there!! You are awesome!!!'
}
transport.sendMail(mailOption,function(error,info){
	if(error){
		console.log(error);
	}
	else
		console.log('Email sent:'+info.response);
});