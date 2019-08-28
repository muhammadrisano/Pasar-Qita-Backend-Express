require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getItem: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT item.*, subcategory.name_subcategory, category.name_category FROM item INNER JOIN subcategory ON item.id_subcategory = subcategory.id_subcategory INNER JOIN category ON subcategory.id_category = category.id_category", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    itemDetail: (id_item) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT item.*, subcategory.name_subcategory, category.name_category FROM item INNER JOIN subcategory ON item.id_subcategory = subcategory.id_subcategory INNER JOIN category ON subcategory.id_category = category.id_category WHERE id_item = ?", id_item, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertItem: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO item SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getByStore: (id_store) => {
        console.log(id_store)
        return new Promise((resolve, reject) => {
            connection.query("SELECT item.*, subcategory.name_subcategory, category.name_category FROM item INNER JOIN subcategory ON item.id_subcategory = subcategory.id_subcategory INNER JOIN category ON subcategory.id_category = category.id_category WHERE item.id_store = ?", id_store, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getBySubcategory: (id_subcategory) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT item.*, subcategory.name_subcategory, category.name_category FROM item INNER JOIN subcategory ON item.id_subcategory = subcategory.id_subcategory INNER JOIN category ON subcategory.id_category = category.id_category WHERE item.id_subcategory = ?", id_subcategory, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteItem: (id_item) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM item WHERE id_item = ?", id_item, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateItem: (id_item, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE item SET ? WHERE id_item = ?", [data, id_item], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }


}