///////////////ENDPOINTS API:

//POST http://localhost:3000/api/favorites
//Guardar favorito del usuario

//DELETE http://localhost:3000/api/favorites
//Borrar favorito del usuario



//IMPORTACIÓN DEL MODELO FAVORITO
const favModel = require("../models/favoritesApiModel");



// POST http://localhost:3000/api/favorites

//CREAR FAVORITO:
const setFavController = async (req,res) => {
    try {
    console.log(req.body);
    //Se guarda en la variable el objeto newUser leído en el body de Postman
    const newUser = req.body; // {id, email, password, full_name, role}
    //Respuesta
    const response = await favModel.setFavModel(newUser);
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





// DELETE http://localhost:3000/api/favorites

//BORRAR FAVORITO POR EMAIL:
const unsetFavController = async (req, res) => {
    
    try {
        console.log(req.body);
        const newUser = req.body; // {tilte}
        const response = await favModel.unsetFavModel(newUser);
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



//EXPORTACIÓN DE CONTROLADORES DE FAVORITOS:
module.exports = {
    setFavController,
    unsetFavController
    };