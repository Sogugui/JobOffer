//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const usersApiController = require("../controllers/usersApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const usersApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
usersApiRouter.post("/", usersApiController.createUserController);
usersApiRouter.put("/", usersApiController.updateUserController);
usersApiRouter.delete("/", usersApiController.deleteUserController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = usersApiRouter;



///////////////ENDPOINTS DE USUARIOS:

//POST http://localhost:3000/api/users
//PUT http://localhost:3000/api/users
//DELETE http://localhost:3000/api/users