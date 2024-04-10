const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Campstore'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("MYSQL connected")
    }
})

const getAllTools = (callback) => {
   const sql = "SELECT* FROM Tools"
   connection.query(sql,function(error,results){
    callback(error,results)
   })
};

const addTool = (nwProduct, callback) => {
    const sql = 'INSERT INTO tools SET ?';
    connection.query(sql, nwProduct, function (error, results) {
        callback(error, results);
    });
};

const DeleteTool = (id, callback) => {
    const sql = 'DELETE FROM tools WHERE id= ?';
    connection.query(sql,[id], function (error, results) {
        callback(error, results);
    });
}
const getOneTool = (id,callback) => {
    const sql = "SELECT * FROM tools WHERE id =?"
    connection.query(sql,[id],function(error,results){
     callback(error,results)
    })
 };
 const update = (id,params, callback) => {
    const sql = 'UPDATE tools SET name=?, description=?, price= ?, image= ? WHERE id=?'
    connection.query(sql, [params.name,  params.description,params.price,params.image,id], (err, reuslts) => {
          callback(err, reuslts)
    })
}

module.exports= { getAllTools ,addTool,DeleteTool,getOneTool,update};