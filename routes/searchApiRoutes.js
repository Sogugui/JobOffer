///////////////ENDPOINTS API:

//GET http://localhost:3000/api/search
//Listado de resultados de la búsqueda



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const searchApiController = require("../controllers/searchApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const searchApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
searchApiRouter.get("/", searchApiController.searchController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = searchApiRouter;