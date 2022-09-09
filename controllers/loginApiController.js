///////////////ENDPOINTS API:

//POST http://localhost:3000/api/login
//Hacer login en la aplicación



//IMPORTACIÓN DEL MODELO LOGIN
const loginModel = require("../models/loginApiModel");



// POST http://localhost:3000/api/login

//HACER LOGIN:
const loginController = async (req,res) => {
    try {
    console.log(req.body);
    //Se guarda en la variable el objeto newUser leído en el body de Postman
    const newUser = req.body; // {id, email, password, full_name, role}
    //Respuesta
    const response = await loginModel.doLoginModel(newUser);
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



//EXPORTACIÓN DE CONTROLADORES DE LOGIN:
module.exports = {
    loginController
    };