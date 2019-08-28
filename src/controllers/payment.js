const paymentModels = require('../models/payment')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getPayment: (req, res) => {
        paymentModels.getPayment()
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    paymentDetail: (req, res) => {
        const id_payment = req.params.id_payment
        paymentModels.paymentDetail(id_payment)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertPayment: (req, res) => {
        const { id_cart, total_payment, name_item, shipping_method, payment_method, id_user } = req.body
        const data = {
            id_cart,
            total_payment,
            name_item,
            shipping_method,
            payment_method,
            id_user,
            status: 0,
            created_at: new Date(),
            updated_at: new Date()
        }
        paymentModels.insertPayment(data)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getPayment: (req, res) => {
        const id_user = req.params.id_user
        paymentModels.getPayment(id_user)
            .then((resultpayment) => {
                const result = resultpayment[0]
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    checkoutPayment: (req, res) => {
        const id_payment = req.params.id_payment
        const { shipping_method, payment_method } = req.body
        const data = {
            shipping_method,
            payment_method,
            status: 0
        }
        paymentModels.checkoutPayment(id_payment, data)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateStatus: (req, res) => {
        const id_payment = req.params.id_payment
        const data = {
            status: req.body.status
        }
        paymentModels.updateStatus(id_payment, data)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getByUser: (req, res) => {
        const id_user = req.params.id_user
        paymentModels.getByUser(id_user)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    startPayment: (req, res) => {
        const id_user = req.params.id_user
        paymentModels.getCartByUser(id_user)
            .then((resultpayment) => {
                const result = resultpayment
                let harga = 0
                let id_cart = []
                let name_item = []
                result.map((item) => {
                    id_cart.push(item.id_cart)
                    name_item.push(item.name_item)
                    harga += item.quantity * item.price
                })
                console.log(harga)
                // console.log(result)
                // MiscHelper.response(res, result, 200)
                const data = {
                    id_cart: id_cart.join(" "),
                    name_item: name_item.join(", "),
                    total_payment: harga,
                    shipping_method: "",
                    payment_method: "",
                    id_user: id_user,
                    status: 9,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                console.log(data)
                paymentModels.insertPayment(data)
                    .then((resultpayment) => {
                        const result = resultpayment
                        MiscHelper.response(res, result, 200)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getByStatus: (req, res) => {
        const status = req.params.status
        paymentModels.getByStatus(status)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updatePayment: (req, res) => {
        const id_payment = req.params.id_payment
        const { id_cart, name_item, total_payment, shipping_method, payment_method, id_user, status } = req.body
        const data = {
            id_cart,
            name_item,
            total_payment,
            shipping_method,
            payment_method,
            id_user,
            status,
            updated_at: new Date()
        }
        paymentModels.updatePayment(id_payment, data)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deletePayment: (req, res) => {
        const id_payment = req.params.id_payment
        paymentModels.deletePayment(id_payment)
            .then((resultpayment) => {
                const result = resultpayment
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}