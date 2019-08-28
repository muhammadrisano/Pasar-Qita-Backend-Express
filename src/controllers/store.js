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
    getByMarket: (req, res) => {
        const id_market = req.params.id_market
        console.log(id_market)
        storeModels.getByMarket(id_market)
            .then((resultsubcategory) => {
                const result = resultsubcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getByUser: (req, res) => {
        const id_user = req.params.id_user
        console.log(id_user)
        storeModels.getByUser(id_user)
            .then((resultsubcategory) => {
                const result = resultsubcategory
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
            photo: "https://res.cloudinary.com/dfezrynjl/image/upload/v1566981333/store_sxdrwz.png",
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
        const { name_store, id_market, shop_selector, photo } = req.body
        const data = {
            name_store,
            id_market,
            shop_selector,
            photo,
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