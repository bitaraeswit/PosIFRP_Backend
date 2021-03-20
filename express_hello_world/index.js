const express = require ('express');

const app = express();

let port =3000;

//o get lida com os acessos dos usuários
app.get('/', (req, res) => {
  res.send("Olá! Seja bem vindo") // resposta depois que o usuário acessa o sistema
});

app.get('/sobre', (req, res) => {
  res.send("Olá! pagina sobre") // resposta depois que o usuário acessa o sistema
});


//chamar rotas com parametros
let params_module = require ('/params.js');
app.use('/', params_module);


app.get('*', (req, res) => {
  res.send("Link inválido: 404") // resposta depois que o usuário acessa o sistema
});

app.get('/json ', (req, res) => {
  res.status(200).json({usuario: "lucas", id: 123456});
});


//metodo post
app.post('/teste_post ', (req, res) => {
  res.send("Você acessou uma página via metodo POST") 
});

app.listen(port, () => console.log(`Escutando na porta ${port}`)); //responsavel por escutar

