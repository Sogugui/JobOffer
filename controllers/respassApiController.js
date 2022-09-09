///////////////ENDPOINTS API:

//GET http://localhost:3000/api/restorepassword
//Cambiar password



//IMPORTACIÓN DEL MODELO ENTRADA
const entryModel = require("../models/entriesApiModel");


//LEER ENTRADAS (TODAS Y POR EMAIL)
const respassController = async (req, res) => {
    //Se declara la variable que tiene que devolver la función
    let entries;
    try {
        //Si me pasas un email
        if (req.query.email) {
            //Búsqueda por email, invocando el método asíncrono getEntriesByEmail
            //(query. -> Para acceder a los parámetros de URL. ej: query.email)
            entries = await entryModel.getEntriesByEmail(req.query.email);
            //Devuelve [] con las entries encontradas
            res.status(200).json(entries);
        }else {
            //Si no pasas email, invocar método asíncrono getAllEntries
            entries = await entryModel.getAllEntries();
            res.status(200).json(entries);
        };
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    };
};





//EXPORTACIÓN DE CONTROLADORES DE ENTRADAS:
module.exports = {
    respassController
    };