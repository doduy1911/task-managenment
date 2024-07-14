// nhúng express
const express = require("express");
// cài đặt biến app
const app = express();
// nhúng env 
const env = require("dotenv").config();
// nhúng file database để kết nối databasse
const database = require("./config/database.js")
// biến port đc định nghĩa ở bên file env 
const port= process.env.PORT
// kết nối đến database
database.connect();
// nhúng model task công việc
const Task = require("./model/tash.model.js")

app.get("/tasks/detail/:id", async (req,res)=>{
    const id = req.params.id;
    const task = await Task.findOne({
        _id: id,
        deleted:false
    })
    
  
    const tasks = await Task.find({
        deleted:false,
    })


  
    res.json(task)
    
})

app.listen(port,() => {
    console.log(`Lắng Nghe Cổng ${port} `)
})
