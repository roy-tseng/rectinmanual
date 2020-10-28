var mysql = require('mysql');

class DBMan {

    constructor(host, user, password, databaseName){
        this.connection = mysql.createConnection({
            host : host,
            user : user,
            password : password,
            database : databaseName
            }); 
    }

    openConnection(){
        this.connection.connect(function(err){
            if(err) throw err;
            console.log('connect success!');
            });
    }

    closeConnection(){
        this.connectionconn.end(function(err){
            if(err) throw err;
            console.log('connect end');
            })
    }

    executeQuery(syntax){
        this.connection.query(syntax, function(err, result, fields){
            if(err) throw err;
            console.log(result);
            });
    }    
}