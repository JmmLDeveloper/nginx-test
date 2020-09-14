const express = require("express")
const path = require("path")

const SERVER_MESSAGE = process.env.SERVER_MESSAGE || "standard server message"

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
  res.render('index',{message:SERVER_MESSAGE})
})
 
app.listen(8080)
console.log("node server running")