require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port;
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    res.send('Bienvenidos a mi aplicación web, adios')
})
app.post('/saludo', (req, res) => {
    const nombre = req.body.nombre || "invitado";
    const contrasena = req.body.contrasena || "1234";
    res.send('Hola ' + nombre + '' + contrasena)
})
app.post('/factorial', (req, res) => {
    const nombre = req.body.numero;
    if (numero == undefined || isNaN(numero)) {
        return res.status(400).send("Numero no válido")
    }
    const factorial = (n) => {
        if (n == 0) return1;
        return n * factorial(n - 1);
    }
    const resultado = factorial(Number(numero))
    res.send('El factorial de '+numero+' es '+resultado)

    res.send('Hola ' + nombre + '' + contrasena)
})
app.get('/precios', (req, res) => {
    res.send('<h1>Precios</h1><hr><p>Ordenador:1000€</p>')
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${port}`)
});