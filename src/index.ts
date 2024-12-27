import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// req = (CLIENTE) requisição do cliente para a API
// res = (RESPOSTA) devolve da aplicação pro cliente
app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao curso de Node.js - TSWATCH");
})
let id = 0;
type User = {
    id: number; 
    nome: string; 
    email: string
};
let usuarios: User[] = [];

// METODO GET
app.get("/users", (req: Request, res: Response) => {
    
    res.send(usuarios);
});
app.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id)
    let user = usuarios.find(user => user.id === userId)
    res.send(user)
})
// METODO PUT
app.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user: User) => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;

    res.send({
        message : "Usuario alterado com sucesso"
    });
})
// METODO REMOVE
app.delete("/users/:id", (req: Request, res: Response) => {
    // ID DO USUARIO QUE DESEJA REMOVER
    let user_id = Number(req.params.id);
    // INDEX DO USUARIO DENTRO DA LISTA QUE VAI SER REMOVIDO
    let indexOf = usuarios.findIndex((_user: User) => _user.id === user_id)
    //remover o usuario correspondente ao indice encontrado na linha anterior
    usuarios.splice(indexOf, 1);
    res.send({
        message : "Usuario removido com sucesso"
    })
})
// METODO POST
app.post("/users", (req: Request, res: Response) => {
    let user = req.body
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuario criado com sucesso!"
    });
});


app.listen(3000, () => {
    console.log("servidor ativo na porta 3000");
});