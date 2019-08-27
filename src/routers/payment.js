const express = require('express');
const Route = express.Router();
const paymentController = require('../controllers/payment')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', paymentController.getPayment)
    .get('/:id_payment', paymentController.paymentDetail)
    .post('/', paymentController.insertPayment)
    .patch('/:id_payment', paymentController.updatePayment)
    .delete('/:id_payment', paymentController.deletePayment)

module.exports = Route