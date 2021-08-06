// const sayHi = require('./main');
// const http = require("http");

// http.createServer(function(request, response){
// 	response.end('Response completed');
// }).listen('3000', '127.0.0.1', function(){
// 	console.log('Running server on localhost');
// });

// crtl+c - остановить сервер в коммандной строке


const fileSys = require('fs');
// fileSys.writeFile('file.txt', 'Hello!', function(s,e){
// 	if(e){
// 		throw new Error(e);
// 	}
// 	else{
// 		console.log('file was created');
// 	}
// });


let data = fileSys.readFileSync('file.txt', 'utf-8');
console.log(data);