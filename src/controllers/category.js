const categoryModels = require('../models/category')
const MiscHelper = require('../helpers/helpers')
const redis = require('redis')
const REDIS_PORT = process.env.PORT_REDIST || 6379;
const client = redis.createClient(REDIS_PORT)

module.exports = {
    getCategory: (req, res) => {
        categoryModels.getCategory()
            .then((resultcategory) => {
                const result = resultcategory
                client.setex('getallcategory', 3600, JSON.stringify(result))
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    categoryDetail: (req, res) => {
        const id_category = req.params.id_category
        categoryModels.categoryDetail(id_category)
            .then((resultcategory) => {
                const result = resultcategory[0]
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertCategory: (req, res) => {
        const { name_category, icon_category } = req.body
        const data = {
            name_category,
            icon_category,
        }
        categoryModels.insertCategory(data)
            .then((resultcategory) => {
                const result = resultcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    updateCategory: (req, res) => {
        const id_category = req.params.id_category
        const { name_category, icon_category } = req.body
        const data = {
            name_category,
            icon_category,

        }
        categoryModels.updateCategory(id_category, data)
            .then((resultcategory) => {
                const result = resultcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteCategory: (req, res) => {
        const id_category = req.params.id_category
        categoryModels.deleteCategory(id_category)
            .then((resultcategory) => {
                const result = resultcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}