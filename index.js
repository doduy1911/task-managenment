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
// router v1
const routerApiV1 = require("./api/v1/router/index.router.js")
routerApiV1(app)


app.listen(port,() => {
    console.log(`Lắng Nghe Cổng ${port} `)
})
