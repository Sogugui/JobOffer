//IMPORTACIÓN DE EXPRESS:
const express = require('express');

//IMPORTACIÓN DE RUTAS:
const usersApiRouter = require("./routes/usersApiRoutes");

//IMPORTACIÓN DE MIDDLEWARES:
const manage404 = require('./middlewares/error404');


//DECLARACIÓN DE EXPRESS:
const app = express();

//DECLARACIÓN DEL PUERTO:
const port = 3000;


//SELECCIÓN DEL MOTOR DE RENDERIZADO:
app.set('view engine', 'pug');
//RUTA DE UBICACIÓN DE LAS VISTAS:
app.set('views','./views');


//INICIALIZACIÓN DE ESCRITURA EN BODY:
app.use(express.json());


//INICIALIZACIÓN DEL ROUTER DE USUARIOS:
app.use("/api/users", usersApiRouter);


//INICIALIZACIÓN DE MIDDLEWARES:
app.use(manage404);


//INICIALIZACIÓN DEL PUERTO:
app.listen(port, () => {
  console.log(`El servidor funciona en el puerto ${port}`);
});