const storeModels = require('../models/store')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getStore: (req, res) => {
        storeModels.getStore()
            .then((resultStore) => {
                const result = resultStore
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    storeDetail: (req, res) => {
        const id_store = req.params.id_store
        storeModels.storeDetail(id_store)
            .then((resultstore) => {
                const result = resultstore
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertStore: (req, res) => {
        const { name_store, id_market, shop_selector } = req.body
        const data = {
            name_store,
            id_market,
            shop_selector,
            created_at: new Date(),
            updated_at: new Date()
        }
        storeModels.insertStore(data)
            .then((resultstore) => {
                const result = resultstore
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    updateStore: (req, res) => {
        const id_store = req.params.id_store
        const { name_store, id_market, shop_selector } = req.body
        const data = {
            name_store,
            id_market,
            shop_selector,
            updated_at: new Date()
        }
        storeModels.updateStore(id_store, data)
            .then((resultstore) => {
                const result = resultstore
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteStore: (req, res) => {
        const id_store = req.params.id_store
        storeModels.deleteStore(id_store)
            .then((resultstore) => {
                const result = resultstore
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}