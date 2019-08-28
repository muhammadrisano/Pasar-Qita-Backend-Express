const subcategoryModels = require('../models/subcategory')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getSubcategory: (req, res) => {
        subcategoryModels.getSubcategory()
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    subcategoryDetail: (req, res) => {
        const id_subcategory = req.params.id_subcategory
        subcategoryModels.subcategoryDetail(id_subcategory)
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertSubcategory: (req, res) => {
        const { name_subcategory, icon_subcategory, id_category } = req.body
        const data = {
            name_subcategory,
            icon_subcategory,
            id_category
        }
        subcategoryModels.insertSubcategory(data)
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    getbycategory: (req, res) => {
        const id_category = req.params.id_category
        subcategoryModels.getbycategory(id_category)
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateSubcategory: (req, res) => {
        const id_subcategory = req.params.id_subcategory
        const { name_subcategory, icon_subcategory, id_category } = req.body
        const data = {
            name_subcategory,
            icon_subcategory,
            id_category
        }
        subcategoryModels.updateSubcategory(id_subcategory, data)
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteSubcategory: (req, res) => {
        const id_subcategory = req.params.id_subcategory
        subcategoryModels.deleteSubcategory(id_subcategory)
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}