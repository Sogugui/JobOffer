///////////////ENDPOINTS API:

//GET http://localhost:3000/api/search
//Listado de resultados de la búsqueda



//IMPORTACIÓN DE CONEXIÓN POSTGRESQL:
const { Pool } = require('pg');

//DECLARACIÓN DE CREDENCIALES DE POSTGRESQL:
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: '1234'
  });


//IMPORTACIÓN DE QUERIES:
const queries = require("../queries/queries");




//HACER BÚSQUEDA POR EMAIL:
const doSearchModel = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEmailEntry,[email]); // 1 es el primer parametro
        result = data.rows;
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    };
    return result;
};
//Para probar, descomentar solo este
/*
getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data));
*/





//EXPORTACIÓN DE LOS MODELOS DE BÚSQUEDAS:
module.exports = {
    doSearchModel
};