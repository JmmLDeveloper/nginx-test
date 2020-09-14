const express = require("express")

const app = express()


app.get("/",(req,res)=>{
  res.send("hello from node")
})

app.listen(8080)
console.log("node server running on port 8080")