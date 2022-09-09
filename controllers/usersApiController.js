///////////////ENDPOINTS API:

//POST http://localhost:3000/api/users
//Registrarse en la aplicación

//PUT http://localhost:3000/api/users
//Editar datos del perfil del user o admin

//DELETE http://localhost:3000/api/users
//Borrar un user de la BBDD (admin)



//IMPORTACIÓN DEL MODELO USUARIO
const userModel = require("../models/usersApiModel");



// POST http://localhost:3000/api/users

//CREAR USUARIO:
const createUserController = async (req,res) => {
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




// PUT http://localhost:3000/api/users

//ACTUALIZAR NOMBRE USUARIO POR EMAIL:
const updateUserController = async (req, res) => {
    
    try {
        console.log(req.body);
        const newUser = req.body; // {full_name, email}
        const response = await userModel.updateUserModel(newUser);
        res.status(200).json({"Guardado: ":response});

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    };
};
/*
//Para probar, pegar en POSTMAN
{
    "full_name":"Pepe Fernández",
    "email":"pepe@gmail.com"
}
*/




// DELETE http://localhost:3000/api/users

//BORRAR USUARIO POR EMAIL:
const deleteUserController = async (req, res) => {
    
    try {
        console.log(req.body);
        const newUser = req.body; // {tilte}
        const response = await userModel.deleteUserModel(newUser);
        res.status(200).json({'Se ha borrado el usuario: ':response});

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    };
};
//Para probar, pegar en POSTMAN
/*
{
    "email":"pepe@gmail.com"
}
*/



//EXPORTACIÓN DE CONTROLADORES DE ENTRADAS:
module.exports = {
    createUserController,
    updateUserController,
    deleteUserController
    };