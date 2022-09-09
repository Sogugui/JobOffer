///////////////ENDPOINTS API:

//GET http://localhost:3000/api/recoverpassword
//Recuperar password



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const recpassApiController = require("../controllers/recpassApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const recpassApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
recpassApiRouter.get("/", recpassApiController.recpassController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = recpassApiRouter;