const fs = require('fs')

fs.writeFileSync(
    "mensagem.txt",
    "criei um bloco do notas com node.js"
)
console.log("arquivo criado com sucesso!")


//json

const pessoa = {
    nome: "juliana",
    idade: 25,
    cidade:"suzano"
}

fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("json criado com sucesso")


//npm install docx -> biblioteca no word

//importar partes especificas da biblioteca word
const{
    Document, //criar o word
    Packer, //transformar o documento em word
    Paragraph, //cria paragrafos
    TextRun //adicionar textos
} = require("docx")


//criando um documento do word
const doc = new Document ({
    sections:[
        {
            properties:{},
            children:[
                new Paragraph({
                    children: [
                        new TextRun("arquivo word")
                    ]
                }),
                new Paragraph({
                    children:[
                        new TextRun("textos importantes")
                    ]
                })
            ]
        }
    ]
})

Packer.toBuffer(doc)
.then((buffer) => {
    fs.writeFileSync(
    "relatorio.docx",
    buffer
)
console.log("o word foi criado")
})