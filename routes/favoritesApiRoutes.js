///////////////ENDPOINTS API:

//POST http://localhost:3000/api/favorites
//Guardar favorito del usuario

//DELETE http://localhost:3000/api/favorites
//Borrar favorito del usuario



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE FAVORITOS:
const favoritesApiController = require("../controllers/favoritesApiController");

//DECLARACIÓN DEL ROUTER DE FAVORITOS:
const favoritesApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE FAVORITOS:
favoritesApiRouter.post("/", favoritesApiController.setFavController);
favoritesApiRouter.delete("/", favoritesApiController.unsetFavController);

//EXPORTACIÓN DEL ROUTER DE FAVORITOS:
module.exports = favoritesApiRouter;