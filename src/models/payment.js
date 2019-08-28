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
    getByUser: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM payment WHERE status = 0 AND id_user =?", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getPayment: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM payment WHERE status = 9 AND id_user =? ORDER BY id_payment DESC", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateStatus: (id_payment, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE payment SET ? WHERE id_payment = ?", [data, id_payment], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    checkoutPayment: (id_payment, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE payment SET ? WHERE id_payment = ?", [data, id_payment], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getCartByUser: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT cart.*, item.name_item, item.price FROM cart INNER JOIN item ON cart.id_item = item.id_item WHERE status = 1 AND id_user =?", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getByStatus: (status) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM payment WHERE status = ?", status, (err, result) => {
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