import express from 'express';
import mysql from 'mysql';
const app = express()
const port = 3000
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password  :'root',
  database : 'test'
});

app.get('/', (req, res) => {
  connection.connect();
  connection.query("select * from users", function(error, results){
    console.log("query response is ", results);
    console.log('error is ', error);
    res.json(results);
  })
  connection.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
