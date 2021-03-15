const dbConnect = require('../../Restaurant-Search/config/connection')
const connection = require('./connection')

const orm = {
    selectAll(){
    db.query('SELECT * FROM burgers;')
    },

    insertOne(){
    db.query(`INSERT INTO burgers VALUES ('${burgername});`)
    },

    updateOne(){
    db.query(`UPDATE burgers SET devoured = TRUE WHERE burger_name = ${burgername}`)
    },
}

module.exports = orm 