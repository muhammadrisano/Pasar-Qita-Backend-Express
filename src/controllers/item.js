const itemModels = require('../models/item')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getItem: (req, res) => {
        itemModels.getItem()
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    itemDetail: (req, res) => {
        const id_item = req.params.id_item
        itemModels.itemDetail(id_item)
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getByStore: (req, res) => {
        const id_store = req.params.id_store
        itemModels.getByStore(id_store)
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getBySubcategory: (req, res) => {
        const id_subcategory = req.params.id_subcategory
        itemModels.getBySubcategory(id_subcategory)
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertItem: (req, res) => {
        const { name_item, image, description, price, id_subcategory, id_store } = req.body
        const data = {
            name_item,
            image,
            description,
            price,
            id_subcategory,
            id_store
        }
        itemModels.insertItem(data)
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateItem: (req, res) => {
        const id_item = req.params.id_item
        const { name_item, image, description, price, id_subcategory, id_store } = req.body
        const data = {
            name_item,
            image,
            description,
            price,
            id_subcategory,
            id_store
        }
        itemModels.updateItem(id_item, data)
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteItem: (req, res) => {
        const id_item = req.params.id_item
        itemModels.deleteItem(id_item)
            .then((resultitem) => {
                const result = resultitem
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}