///////////////ENDPOINTS API:

//POST http://localhost:3000/api/favorites
//Guardar favorito del usuario

//DELETE http://localhost:3000/api/favorites
//Borrar favorito del usuario



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





//CREAR FAVORITO:
const setFavModel = async (user) => {
    const {id, email, password, full_name, role} = user;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUserQuery,[id, email, password, full_name, role]);
        result = data.rowCount
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
let newUser = {
    id:"25",
    email:"pepe@gmail.com",
    password:"1234",
    full_name:"Pepe Rodríguez",
    role:"administrador"
};

createUser(newUser)
.then(data=>console.log(data));
*/








//BORRAR FAVORITO POR EMAIL:
const unsetFavModel = async (user) => {
    const {email} = user;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteUserQuery,[email]);
        result = data.rowCount;
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
let deleteUser = {
    email:"pepe@gmail.com"
};

deleteUser(deleteUser)
.then(data=>console.log(data));
*/






//EXPORTACIÓN DE LOS MODELOS DE FAVORITOS:
module.exports = {
    setFavModel,
    unsetFavModel
};