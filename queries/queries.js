//DECLARACIÓN DE QUERIES SQL:
const queries = {

    createUserQuery:
    `INSERT INTO users (id, email, password, full_name, role) 
    VALUES ($1,$2,$3,$4,$5);`,

    updateUserQuery:
    `UPDATE users 
    SET full_name= $1 
    WHERE users.email = $2;`,

    deleteUserQuery:
    `DELETE 
    FROM users 
    WHERE email = $1;`,

};

//EXPORTACIÓN DE QUERIES SQL:
module.exports = queries;