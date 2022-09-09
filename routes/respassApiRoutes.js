///////////////ENDPOINTS API:

//GET http://localhost:3000/api/restorepassword
//Cambiar password



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE RESTAURAR PASS:
const respassApiController = require("../controllers/respassApiController");

//DECLARACIÓN DEL ROUTER DE RESTAURAR PASS:
const respassApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE RESTAURAR PASS:
respassApiRouter.get("/", respassApiController.respassController);

//EXPORTACIÓN DEL ROUTER DE RESTAURAR PASS:
module.exports = respassApiRouter;