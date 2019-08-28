require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getSubcategory: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT subcategory.*, category.name_category FROM subcategory INNER JOIN category ON subcategory.id_category = category.id_category", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getbycategory: (id_category) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT subcategory.*, category.name_category FROM subcategory INNER JOIN category ON subcategory.id_category = category.id_category WHERE subcategory.id_category =?", id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    subcategoryDetail: (id_subcategory) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT subcategory.*, category.name_category FROM subcategory INNER JOIN category ON subcategory.id_category = category.id_category WHERE id_subcategory =?", id_subcategory, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertSubcategory: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO subcategory SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteSubcategory: (id_subcategory) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM subcategory WHERE id_subcategory = ?", id_subcategory, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateSubcategory: (id_subcategory, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE subcategory SET ? WHERE id_subcategory = ?", [data, id_subcategory], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}