///////////////ENDPOINTS API:

//GET http://localhost:3000/api/recoverpassword
//Recuperar password



//IMPORTACIÓN DEL MODELO RECUPERAR PASS
const recpassModel = require("../models/recpassApiModel");


//LEER RECUPERAR PASS (TODAS Y POR EMAIL)
const recpassController = async (req, res) => {
    //Se declara la variable que tiene que devolver la función
    let entries;
    try {
        //Si me pasas un email
        if (req.query.email) {
            //Búsqueda por email, invocando el método asíncrono getEntriesByEmail
            //(query. -> Para acceder a los parámetros de URL. ej: query.email)
            entries = await recpassModel.doRecpassModel(req.query.email);
            //Devuelve [] con las entries encontradas
            res.status(200).json(entries);
        }else {
            //Si no pasas email, invocar método asíncrono getAllEntries
            entries = await recpassModel.doRecpassModel();
            res.status(200).json(entries);
        };
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    };
};





//EXPORTACIÓN DE CONTROLADORES DE RECUPERAR PASS:
module.exports = {
    recpassController
    };