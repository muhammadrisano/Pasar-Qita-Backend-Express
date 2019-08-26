const marketModels = require('../models/market')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getMarket: (req, res) => {
        marketModels.getMarket()
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    marketDetail: (req, res) => {
        const id_market = req.params.id_market
        marketModels.marketDetail(id_market)
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertMarket: (req, res) => {
        const { name_market, address, longitude, latitude } = req.body
        const data = {
            name_market,
            address,
            longitude,
            latitude,
            created_at: new Date(),
            updated_at: new Date()
        }
        marketModels.insertMarket(data)
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    updateMarket: (req, res) => {
        const id_market = req.params.id_market
        const { name_market, address, longitude, latitude } = req.body
        const data = {
            name_market,
            address,
            longitude,
            latitude,
            updated_at: new Date()
        }
        marketModels.updateMarket(id_market, data)
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteMarket: (req, res) => {
        const id_market = req.params.id_market
        marketModels.deleteMarket(id_market)
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }







}