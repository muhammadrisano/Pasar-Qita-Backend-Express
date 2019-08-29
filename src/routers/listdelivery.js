const express = require('express');
const Route = express.Router();
const listdeliveryController = require('../controllers/listdelivery.js')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', listdeliveryController.getListdelivery)
    .get('/:id_listdelivery', listdeliveryController.listdeliveryDetail)
    .post('/', listdeliveryController.insertListdelivery)
    .patch('/:id_listdelivery', listdeliveryController.updateListdelivery)
    .delete('/:id_listdelivery', listdeliveryController.deleteListdelivery)

module.exports = Route