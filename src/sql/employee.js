import db from '../sequelize'

async function getEmpData () {
    console.log('****getEmpData');
    var result = await db.sql("select * from employee");
    return result;
}

async function addEmpData (name,dept) {
    console.log('****addEmpData');
    var result1 = await db.sql(`insert into employee (name, dept) values ('${name}', '${dept}')`);
    return result1;
}

async function addUserData (name,email,password) {
    console.log('****addEmpData');
    var result1 = await db.sql(`insert into register (name, email, password) values ('${name}', '${email}', '${password}')`);
    return result1;
}

async function searchUserData (email,password) {
    console.log('****searchUserData');
    var result = await db.sql(`select id, email, name from register where  email= '${email}' AND password= '${password}'`);
    return result;
}

module.exports = { getEmpData, addEmpData,addUserData, searchUserData };