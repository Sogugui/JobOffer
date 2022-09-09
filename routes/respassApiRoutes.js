///////////////ENDPOINTS API:

//GET http://localhost:3000/api/restorepassword
//Cambiar password



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const respassApiController = require("../controllers/respassApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const respassApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
respassApiRouter.get("/", respassApiController.respassController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = respassApiRouter;