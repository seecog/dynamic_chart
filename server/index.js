var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http');
var server = http.createServer(app);
var Stock = require('./models/stock.model.js')
var io = require('socket.io').listen(server);

mongoose.connect("mongodb://localhost/market",function(err,res){
    console.log('Database connected')
})

io.on('connection',function(socket){

setInterval(function(){
    Stock.find({},function(err,stock){
        if(stock){
           // console.log('Inside stock ',stock)
            socket.emit('latest',stock)
        }
    })
},2000);

})


server.listen(3001,function(){
    console.log('Server gets started')
})