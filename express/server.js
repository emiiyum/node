//server.js
//npm init -y => inicia o projeto do node
//npm install express

const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("servidor funcionando")
})

app.listen(3000, function(){
    console.log("servidor rodando na porta 3000")
})


