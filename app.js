//task 1
const express = require('express'); 
//task 2
const app = express(); 
//task 3
// app.get('/', (req, res) => { //parametros sao a string com o endereco executado e a funcao a ser executada
//     res.send('Olá, visitante!');
// }) 
//task 4
app.listen(3000, () => { console.log("Servidor rodando na porta 3000") });
//task 5
// app.get('/about', (req, res) => {
//     res.send('Outro texto')})
//task 6
const router = require('./src/router');
app.use('/', router);