const storeModels = require('../models/store')
const MiscHelper = require('../helpers/helpers')
const cloudinary = require('cloudinary')
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
                const result = resultsubcategory[0]
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
    updateStore: async (req, res) => {
        let path = req.file.path
        const id_store = req.params.id_store
        let geturl = async (req) => {
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET
            })

            let dataCloudinary
            await cloudinary.uploader.upload(path, (result) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                dataCloudinary = result.url
            })

            return dataCloudinary
        }
        const data = {
            photo: await geturl(),
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