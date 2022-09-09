///////////////ENDPOINTS API:

//POST http://localhost:3000/api/login
//Hacer login en la aplicación



//IMPORTACIÓN DEL MODELO USUARIO
const userModel = require("../models/usersApiModel");



// POST http://localhost:3000/api/users

//CREAR USUARIO:
const loginController = async (req,res) => {
    try {
    console.log(req.body);
    //Se guarda en la variable el objeto newUser leído en el body de Postman
    const newUser = req.body; // {id, email, password, full_name, role}
    //Respuesta
    const response = await userModel.createUserModel(newUser);
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



//EXPORTACIÓN DE CONTROLADORES DE ENTRADAS:
module.exports = {
    loginController
    };