var mysql = require('mysql');

if(process.env.JAWSDB_URL){

connection = mysql.createConnection(process.env.JAWSDB_URL);

}
else{
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sigma101',
    database: 'national_insurance_db'
})
}



module.exports = connection;
