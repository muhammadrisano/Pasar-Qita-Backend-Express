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
                const result = resultpattern
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
        }
        marketModels.insertMarket(data)
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    updateMarket: (req, res) => {
        const id_pattern = req.params.id_market
        const { name_market, address, longitude, latitude } = req.body
        const data = {
            name_market,
            address,
            longitude,
            latitude
        }
        marketModels.updateMarket(id_pattern, data)
            .then((resultmarket) => {
                const result = resultmarket
                MiscHelper.response(res, result, 200)
            })

    }






}