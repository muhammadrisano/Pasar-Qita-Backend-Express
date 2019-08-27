require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getPayment: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM payment", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    paymentDetail: (id_payment) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM payment WHERE id_payment =?", id_payment, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertPayment: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO payment SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deletePayment: (id_payment) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM payment WHERE id_payment = ?", id_payment, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updatePayment: (id_payment, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE payment SET ? WHERE id_payment = ?", [data, id_payment], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }


}