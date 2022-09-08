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





//CREAR USUARIO:
const createUserModel = async (user) => {
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







//ACTUALIZAR NOMBRE DE USUARIO POR EMAIL:
const updateUserModel = async (user) => {
    const {full_name, email} = user;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateUserQuery,[full_name, email]);
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
let newEntry = {
    full_name:"Pepe Fernández",
    email:"pepe@gmail.com"
};

updateUser(newUser)
.then(data=>console.log(data));
*/







//BORRAR USUARIO POR EMAIL:
const deleteUserModel = async (user) => {
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






//EXPORTACIÓN DE LOS MODELOS DE ENTRADAS:
module.exports = {
    createUserModel,
    updateUserModel,
    deleteUserModel
};