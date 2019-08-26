require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getMarket: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM market", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    marketDetail: (id_market) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM market WHERE id_market =?", id_market, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertMarket: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO market SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteMarket: (id_market) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM market WHERE id_market = ?", id_market, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateMarket: (id_market, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE market SET ? WHERE id_market = ?", [data, id_market], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }


}