const express = require('express');
const Route = express.Router();
const cartController = require('../controllers/cart')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', cartController.getCart)
    .get('/:id_cart', cartController.cartDetail)
    .post('/', cartController.insertCart)
    .patch('/:id_cart', cartController.updateCart)
    .delete('/:id_cart', cartController.deleteCart)

module.exports = Route