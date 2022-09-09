///////////////ENDPOINTS API:

//GET http://localhost:3000/api/search
//Listado de resultados de la búsqueda



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE BÚSQUEDA:
const searchApiController = require("../controllers/searchApiController");

//DECLARACIÓN DEL ROUTER DE BÚSQUEDA:
const searchApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE BÚSQUEDA:
searchApiRouter.get("/", searchApiController.searchController);

//EXPORTACIÓN DEL ROUTER DE BÚSQUEDA:
module.exports = searchApiRouter;