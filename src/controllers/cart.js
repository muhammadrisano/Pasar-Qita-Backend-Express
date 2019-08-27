const cartModels = require('../models/cart')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getCart: (req, res) => {
        cartModels.getCart()
            .then((resultcart) => {
                const result = resultcart
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    cartDetail: (req, res) => {
        const id_cart = req.params.id_cart
        cartModels.cartDetail(id_cart)
            .then((resultcart) => {
                const result = resultcart
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertCart: (req, res) => {
        const { id_item, quantity, id_user, ket, status } = req.body
        const data = {
            id_item,
            quantity,
            id_user,
            ket,
            status,
            created_at: new Date(),
            updated_at: new Date()
        }
        cartModels.insertCart(data)
            .then((resultcart) => {
                const result = resultcart
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })

    },
    updateCart: (req, res) => {
        const id_cart = req.params.id_cart
        const { id_item, quantity, id_user, ket, status } = req.body
        const data = {
            id_item,
            quantity,
            id_user,
            ket,
            status,
            updated_at: new Date()
        }
        cartModels.updateCart(id_cart, data)
            .then((resultcart) => {
                const result = resultcart
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteCart: (req, res) => {
        const id_cart = req.params.id_cart
        cartModels.deleteCart(id_cart)
            .then((resultcart) => {
                const result = resultcart
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}