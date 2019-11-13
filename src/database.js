const mongoose = require('mongoose');
var mysql = require('mysql');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/merndatabase';

var mySqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'universidad'
});

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mySqlConnection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected to MySQL as id ' + mySqlConnection.threadId);
});


const mongoConnection = mongoose.connection;

mongoConnection.once('open', () => {
    console.log('Mongo Database is connected');
});

module.exports = mySqlConnection;