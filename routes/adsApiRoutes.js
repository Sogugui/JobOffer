///////////////ENDPOINTS API:

//POST http://localhost:3000/api/ads
//Crear una oferta de trabajo (admin)

//PUT http://localhost:3000/api/ads
//Editar datos de una oferta de trabajo (admin)

//DELETE http://localhost:3000/api/ads
//Borrar una oferta de trabajo de la BBDD (admin)



//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE ANUNCIOS:
const adsApiController = require("../controllers/adsApiController");

//DECLARACIÓN DEL ROUTER DE ANUNCIOS:
const adsApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE ANUNCIOS:
adsApiRouter.post("/", adsApiController.createAdsController);
adsApiRouter.put("/", adsApiController.updateAdsController);
adsApiRouter.delete("/", adsApiController.deleteAdsController);

//EXPORTACIÓN DEL ROUTER DE ANUNCIOS:
module.exports = adsApiRouter;