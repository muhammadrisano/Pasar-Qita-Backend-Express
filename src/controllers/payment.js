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
        const { id_cart, total_payment, shipping_method, payment_method } = req.body
        const data = {
            id_cart,
            total_payment,
            shipping_method,
            payment_method,
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
    updatePayment: (req, res) => {
        const id_payment = req.params.id_payment
        const { id_cart, total_payment, shipping_method, payment_method } = req.body
        const data = {
            id_cart,
            total_payment,
            shipping_method,
            payment_method,
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