"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// req = (CLIENTE) requisição do cliente para a API
// res = (RESPOSTA) devolve da aplicação pro cliente
app.get("/", (req, res) => {
    res.send("Bem vindo ao curso de Node.js");
});
app.listen(3000, () => {
    console.log("servidor ativo na porta 3000");
});
//# sourceMappingURL=index.js.map