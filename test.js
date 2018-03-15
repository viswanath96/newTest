var mySql = require('mysql');
var myConnection = mySql.createConnection({
    host:'localhost',
    username:'root',
    password:''
});

myConnection.connect(function(error){
    if(error) throw error;
    console.log('connected!');
});