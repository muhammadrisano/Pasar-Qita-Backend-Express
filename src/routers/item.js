const express = require('express');
const Route = express.Router();
const itemController = require('../controllers/item')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', itemController.getItem)
    .get('/:id_item', itemController.itemDetail)
    .get('/bysubcategory/:id_subcategory', itemController.getBySubcategory)
    .get('/bystore/:id_store', itemController.getByStore)
    .post('/', itemController.insertItem)
    .patch('/:id_item', itemController.updateItem)
    .delete('/:id_item', itemController.deleteItem)

module.exports = Route