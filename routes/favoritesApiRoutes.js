///////////////ENDPOINTS API:

//POST http://localhost:3000/api/favorites
//Guardar favorito del usuario

//DELETE http://localhost:3000/api/favorites
//Borrar favorito del usuario



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const favoritesApiController = require("../controllers/favoritesApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const favoritesApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
favoritesApiRouter.post("/", favoritesApiController.setFavController);
favoritesApiRouter.delete("/", favoritesApiController.unsetFavController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = favoritesApiRouter;