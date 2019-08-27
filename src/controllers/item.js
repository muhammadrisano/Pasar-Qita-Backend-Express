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
    insertItem: (req, res) => {
        const { name_item, image, description, price, id_subcategory } = req.body
        const data = {
            name_item,
            image,
            description,
            price,
            id_subcategory
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
        const { name_item, image, description, price, id_subcategory } = req.body
        const data = {
            name_item,
            image,
            description,
            price,
            id_subcategory
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