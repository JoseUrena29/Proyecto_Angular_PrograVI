const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {

    try{

        await mongoose.connect(process.env.DB_MONGO,{
            //userNewUrlParser: true,
            // useUnitfiedTopology: true,
            // useFindAndModify: false
        })
        console.log('Conexión Exitosa Base de Datos!');

    } catch (error){
        console.log(error);
        process.exit(1) // Detener APP 
    }
}

module.exports = conectarDB