require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getListdelivery: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM listdelivery", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    listdeliveryDetail: (id_listdelivery) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM listdelivery WHERE id_listdelivery =?", id_listdelivery, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertListdelivery: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO listdelivery SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteListdelivery: (id_listdelivery) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM listdelivery WHERE id_listdelivery = ?", id_listdelivery, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateListdelivery: (id_listdelivery, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE listdelivery SET ? WHERE id_listdelivery = ?", [data, id_listdelivery], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}