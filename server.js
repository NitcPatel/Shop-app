var http = require('http');
var path = require('path');
var express = require('express');

const app = express();
//const public = path.join(__dirname,'/public');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
	res.sendFile(public+'/index.html');
})

app.listen(3000,function(){
	console.log('server listening on 3k')
})