///////////////ENDPOINTS API:

//POST http://localhost:3000/api/ads
//Crear una oferta de trabajo (admin)

//PUT http://localhost:3000/api/ads
//Editar datos de una oferta de trabajo (admin)

//DELETE http://localhost:3000/api/ads
//Borrar una oferta de trabajo de la BBDD (admin)



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USUARIOS:
const adsApiController = require("../controllers/adsApiController");

//DECLARACIÓN DEL ROUTER DE USUARIOS:
const adsApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USUARIOS:
adsApiRouter.post("/", adsApiController.createAdvController);
adsApiRouter.put("/", adsApiController.updateAdvController);
adsApiRouter.delete("/", adsApiController.deleteAdvController);

//EXPORTACIÓN DEL ROUTER DE USUARIOS:
module.exports = adsApiRouter;