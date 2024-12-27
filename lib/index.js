"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// req = (CLIENTE) requisição do cliente para a API
// res = (RESPOSTA) devolve da aplicação pro cliente
app.get("/", (req, res) => {
    res.send("Bem vindo ao curso de Node.js - TSWATCH");
});
let id = 0;
let usuarios = [];
// METODO GET
app.get("/users", (req, res) => {
    res.send(usuarios);
});
app.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id === userId);
    res.send(user);
});
// METODO PUT
app.put("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user) => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "Usuario alterado com sucesso"
    });
});
// METODO REMOVE
app.delete("/users/:id", (req, res) => {
    // ID DO USUARIO QUE DESEJA REMOVER
    let user_id = Number(req.params.id);
    // INDEX DO USUARIO DENTRO DA LISTA QUE VAI SER REMOVIDO
    let indexOf = usuarios.findIndex((_user) => _user.id === user_id);
    //remover o usuario correspondente ao indice encontrado na linha anterior
    usuarios.splice(indexOf, 1);
    res.send({
        message: "Usuario removido com sucesso"
    });
});
// METODO POST
app.post("/users", (req, res) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuario criado com sucesso!"
    });
});
app.listen(3000, () => {
    console.log("servidor ativo na porta 3000");
});
//# sourceMappingURL=index.js.map