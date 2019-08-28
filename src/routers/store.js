const express = require('express');
const Route = express.Router();
const storeController = require('../controllers/store')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', storeController.getStore)
    .get('/:id_store', storeController.storeDetail)
    .get('/bymarket/:id_market', storeController.getByMarket)
    .get('/byuser/:id_user', storeController.getByUser)
    .post('/', storeController.insertStore)
    .patch('/:id_store', storeController.updateStore)
    .delete('/:id_store', storeController.deleteStore)

module.exports = Route