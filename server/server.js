require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3080;  


// Запросы на сервер разрешены только с этого домена
const cors = require('cors');
app.use( cors() );


// Парсер входящих запросов
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/', require('./src/index.js'));


app.use((req, res, next) => {
    const err = new Error('Запрашиваемый путь не существует');
    err.status = 404;
    next(err);   
});
  
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
        ok: false,
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});