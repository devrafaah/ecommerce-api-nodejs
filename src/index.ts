import express from 'express';

const app = express();


// req = (CLIENTE) requisição do cliente para a API
// res = (RESPOSTA) devolve da aplicação pro cliente
app.get("/", (req, res) => {
    res.send("Bem vindo ao curso de Node.js");
})

app.listen(3000, () => {
    console.log("servidor ativo na porta 3000");
});