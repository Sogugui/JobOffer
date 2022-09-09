///////////////ENDPOINTS API:

//POST http://localhost:3000/api/logout
//Salir



//IMPORTACIÓN DEL MODELO LOGOUT
const logoutModel = require("../models/logoutApiModel");



// POST http://localhost:3000/api/logout

//HACER LOGOUT:
const logoutController = async (req,res) => {
    try {
    console.log(req.body);
    //Se guarda en la variable el objeto newUser leído en el body de Postman
    const newUser = req.body; // {id, email, password, full_name, role}
    //Respuesta
    const response = await logoutModel.doLogoutModel(newUser);
    res.status(201).json({"Guardado: ":response});
    
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    };
};
/*
//Para probar, pegar en POSTMAN
{
    "id":"25",
    "email":"pepe@gmail.com",
    "password":"1234",
    "full_name":"Pepe Rodríguez",
    "role":"administrador"
}
*/




//EXPORTACIÓN DE CONTROLADORES DE LOGOUT:
module.exports = {
    logoutController
    };