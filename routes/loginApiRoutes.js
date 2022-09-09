///////////////ENDPOINTS API:

//POST http://localhost:3000/api/login
//Hacer login en la aplicación



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE LOGIN:
const loginApiController = require("../controllers/loginApiController");

//DECLARACIÓN DEL ROUTER DE LOGIN:
const loginApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE LOGIN:
loginApiRouter.post("/", loginApiController.loginController);

//EXPORTACIÓN DEL ROUTER DE LOGIN:
module.exports = loginApiRouter;