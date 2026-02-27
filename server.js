// server.js
const express = require('express');
const app = express();
const port = 3000;

let users = [
    {id: 1, name:'Антон', age: 19},
    {id: 2, name:'АНТОН', age: 20},
    {id: 3, name:'антон', age: 21},
];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Главная страница');
});

// GET все пользователи
app.get('/users', (req, res) => {
    res.json(users);
});

// GET пользователь по ID
app.get('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ error: "Not found" });
    res.json(user);
});

// POST создание пользователя
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = { id: Date.now(), name, age };
    users.push(newUser);
    res.status(201).json(newUser);
});

// DELETE удаление пользователя
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send('Ok');
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});