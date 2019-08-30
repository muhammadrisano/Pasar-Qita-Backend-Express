require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getStore: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT store.*, market.name_market, market.address, market.longitude, market.latitude, user.name, user.telp FROM store INNER JOIN market ON store.id_market = market.id_market INNER JOIN user ON store.shop_selector = user.id_user ORDER BY store.id_firebase DESC", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    storeDetail: (id_store) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT store.*, market.name_market, market.address, market.longitude, market.latitude, user.name, user.telp FROM store INNER JOIN market ON store.id_market = market.id_market INNER JOIN user ON store.shop_selector = user.id_user WHERE id_store = ?", id_store, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getByMarket: (id_market) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT store.*, market.name_market, market.address, market.longitude, market.latitude, user.name, user.telp FROM store INNER JOIN market ON store.id_market = market.id_market INNER JOIN user ON store.shop_selector = user.id_user WHERE store.id_market = ?", id_market, (err, result) => {
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
            connection.query("SELECT store.*, market.name_market, market.address, market.longitude, market.latitude, user.name, user.telp FROM store INNER JOIN market ON store.id_market = market.id_market INNER JOIN user ON store.shop_selector = user.id_user WHERE store.shop_selector = ?", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertStore: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO store SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteStore: (id_store) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM store WHERE id_store = ?", id_store, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateStore: (id_store, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE store SET ? WHERE id_store = ?", [data, id_store], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}