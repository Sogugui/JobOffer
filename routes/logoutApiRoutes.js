///////////////ENDPOINTS API:

//POST http://localhost:3000/api/logout
//Salir



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const logoutApiController = require("../controllers/logoutApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const logoutApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
logoutApiRouter.post("/", logoutApiController.logoutController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = logoutApiRouter;