console.log('Desde Index.JS')

const express = require('express');
const conectarDB = require('./Config/db');
const cors = require("cors");

//Creacion de Servidor Backend
const app = express();

//Conexión Base de Datos Mongo
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/Productos', require('./Routes/producto'));

app.listen(4000, () => {
    console.log('El Servidor Backend esta compilando correctamente!')
})

//Ejecutar Backend: npm run dev