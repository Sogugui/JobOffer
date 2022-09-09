///////////////ENDPOINTS API:

//POST http://localhost:3000/api/ads
//Crear una oferta de trabajo (admin)

//PUT http://localhost:3000/api/ads
//Editar datos de una oferta de trabajo (admin)

//DELETE http://localhost:3000/api/ads
//Borrar una oferta de trabajo de la BBDD (admin)



//IMPORTACIÓN DEL MODELO USUARIO
const userModel = require("../models/usersApiModel");



// POST http://localhost:3000/api/users

//CREAR USUARIO:
const createAdvController = async (req,res) => {
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
const updateAdvController = async (req, res) => {
    
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
const deleteAdvController = async (req, res) => {
    
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
    createAdvController,
    updateAdvController,
    deleteAdvController
    };