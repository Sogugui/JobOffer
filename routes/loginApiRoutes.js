///////////////ENDPOINTS API:

//POST http://localhost:3000/api/login
//Hacer login en la aplicación



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const loginApiController = require("../controllers/loginApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const loginApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
loginApiRouter.post("/", loginApiController.loginController);


//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = loginApiRouter;