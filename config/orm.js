const dbConnect = require('../../Restaurant-Search/config/connection')
const connection = require('./connection')

const orm = {
    all(){
    db.query('SELECT * FROM burgers;')
    },

    create(){
    db.query(`INSERT INTO burgers VALUES ('${burgername}');`)
    },

    update(){
    db.query(`UPDATE burgers SET devoured = TRUE WHERE burger_name = ${burgername}`)
    },
}

module.exports = orm 