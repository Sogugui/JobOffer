///////////////ENDPOINTS API:

//GET http://localhost:3000/api/recoverpassword
//Recuperar password



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE RECUPERAR PASS:
const recpassApiController = require("../controllers/recpassApiController");

//DECLARACIÓN DEL ROUTER DE RECUPERAR PASS:
const recpassApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE RECUPERAR PASS:
recpassApiRouter.get("/", recpassApiController.recpassController);

//EXPORTACIÓN DEL ROUTER DE RECUPERAR PASS:
module.exports = recpassApiRouter;