//IMPORTACIÓN DE EXPRESS:
const express = require('express');

//IMPORTACIÓN DE RUTAS:
const adsApiRouter = require("./routes/adsApiRoutes");
const favoritesApiRouter = require("./routes/favoritesApiRoutes");
const loginApiRouter = require("./routes/loginApiRoutes");
const logoutApiRouter = require("./routes/logoutApiRoutes");
const recpassApiRouter = require("./routes/recpassApiRoutes");
const respassApiRouter = require("./routes/respassApiRoutes");
const searchApiRouter = require("./routes/searchApiRoutes");
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
app.use("/api/ads", adsApiRouter);
app.use("/api/favorites", favoritesApiRouter);
app.use("/api/login", loginApiRouter);
app.use("/api/logout", logoutApiRouter);
app.use("/api/recoverpassword", recpassApiRouter);
app.use("/api/restorepassword", respassApiRouter);
app.use("/api/search", searchApiRouter);
app.use("/api/users", usersApiRouter);


//INICIALIZACIÓN DE MIDDLEWARES:
app.use(manage404);


//INICIALIZACIÓN DEL PUERTO:
app.listen(port, () => {
  console.log(`El servidor funciona en el puerto ${port}`);
});