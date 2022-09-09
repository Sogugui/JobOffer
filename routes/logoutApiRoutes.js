///////////////ENDPOINTS API:

//POST http://localhost:3000/api/logout
//Salir



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE LOGOUT:
const logoutApiController = require("../controllers/logoutApiController");

//DECLARACIÓN DEL ROUTER DE LOGOUT:
const logoutApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE LOGOUT:
logoutApiRouter.post("/", logoutApiController.logoutController);

//EXPORTACIÓN DEL ROUTER DE LOGOUT:
module.exports = logoutApiRouter;