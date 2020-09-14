const express = require("express")

const app = express()


app.get("/node",(req,res)=>{
  res.send("this is node of node")
})

app.get("/",(req,res)=>{
  res.send("hello from node")
})

app.listen(8080)
console.log("node server running")