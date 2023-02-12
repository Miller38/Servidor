const express = require('express');
const conectarDB = require('./config/db');

// Creamos el servidor 
const app = express();

// Conectamos a la base de datos
conectarDB();

app.use(express.json());

app.use('/api/clientes', require('./routes/cliente'));

// definimos la ruta principal
/*app.get('/', (req, res) => {
    res.send('hello world!');
})*/

app.listen(4000, () => {
    console.log('server runing in port 4000, OK')
})

