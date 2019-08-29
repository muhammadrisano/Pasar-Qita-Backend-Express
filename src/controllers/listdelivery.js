const listdeliveryModels = require('../models/listdelivery')
const MiscHelper = require('../helpers/helpers')
const redis = require('redis')
const REDIS_PORT = process.env.PORT_REDIST || 6379;
const client = redis.createClient(REDIS_PORT)

module.exports = {
    getListdelivery: (req, res) => {
        listdeliveryModels.getListdelivery()
            .then((resultlistdelivery) => {
                const result = resultlistdelivery
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    listdeliveryDetail: (req, res) => {
        const id_listdelivery = req.params.id_listdelivery
        listdeliveryModels.listdeliveryDetail(id_listdelivery)
            .then((resultlistdelivery) => {
                const result = resultlistdelivery[0]
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertListdelivery: (req, res) => {
        const { name_listdelivery, icon_listdelivery } = req.body
        const data = {
            name_listdelivery,
            icon_listdelivery,
        }
        listdeliveryModels.insertListdelivery(data)
            .then((resultlistdelivery) => {
                const result = resultlistdelivery
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    updateListdelivery: (req, res) => {
        const id_listdelivery = req.params.id_listdelivery
        const { name_listdelivery, icon_listdelivery } = req.body
        const data = {
            name_listdelivery,
            icon_listdelivery,

        }
        listdeliveryModels.updateListdelivery(id_listdelivery, data)
            .then((resultlistdelivery) => {
                const result = resultlistdelivery
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteListdelivery: (req, res) => {
        const id_listdelivery = req.params.id_listdelivery
        listdeliveryModels.deleteListdelivery(id_listdelivery)
            .then((resultlistdelivery) => {
                const result = resultlistdelivery
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}