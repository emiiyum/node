const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

let app = express()

app.use(cors())

app.use(express.json())


app.use(express.static("public"))

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "palavras"
})


conexao.connect((erro) => {
    if(erro){
        console.log("erro na conexão")
    }else{
        console.log("conectado ao MySQL")
    }
})

app.post("/salvar", (req, res) => {
    const palavra = req.body.palavra

    const sql = "INSERT INTO palavra (texto) VALUES (?)"

    conexao.query(sql, [palavra], (erro) =>{
        if(erro){
            res.send("err o no insert")
        }else{
            res.send("palavra salva")
        }
    })
    })
    app.listen(3000, () =>{
        console.log("servidor funcionando")
    })




