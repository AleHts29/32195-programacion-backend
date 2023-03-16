const { Sequelize } = require('sequelize');


// creamos una DB --> clase_39
// Sequelize --> es un ORM
const db = new Sequelize('clase_39', "root", "root", {
    host: "localhost",
    port: '8889',
    dialect: 'mysql'
})

module.exports = {
    db
}