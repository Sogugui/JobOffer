///////////////ENDPOINTS API:

//GET http://localhost:3000/api/search
//Listado de resultados de la búsqueda



//IMPORTACIÓN DEL MODELO BÚSQUEDA
const searchModel = require("../models/searchApiModel");


//LEER BÚSQUEDA (TODAS Y POR EMAIL)
const searchController = async (req, res) => {
    //Se declara la variable que tiene que devolver la función
    let entries;
    try {
        //Si me pasas un email
        if (req.query.email) {
            //Búsqueda por email, invocando el método asíncrono getEntriesByEmail
            //(query. -> Para acceder a los parámetros de URL. ej: query.email)
            entries = await searchModel.doSearchModel(req.query.email);
            //Devuelve [] con las entries encontradas
            res.status(200).json(entries);
        }else {
            //Si no pasas email, invocar método asíncrono getAllEntries
            entries = await searchModel.doSearchModel();
            res.status(200).json(entries);
        };
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    };
};





//EXPORTACIÓN DE CONTROLADORES DE BÚSQUEDA:
module.exports = {
    searchController
    };