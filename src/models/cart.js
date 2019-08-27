require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getCart: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT cart.*, user.name, item.name_item, item.image, item.description, item.price  FROM cart INNER JOIN user ON cart.id_user = user.id_user INNER JOIN item ON cart.id_item = item.id_item", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    cartDetail: (id_cart) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT cart.*, user.name, item.name_item, item.image, item.description, item.price  FROM cart INNER JOIN user ON cart.id_user = user.id_user INNER JOIN item ON cart.id_item = item.id_item WHERE id_cart =?", id_cart, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertCart: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO cart SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCart: (id_cart) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM cart WHERE id_cart = ?", id_cart, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateCart: (id_cart, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE cart SET ? WHERE id_cart = ?", [data, id_cart], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}