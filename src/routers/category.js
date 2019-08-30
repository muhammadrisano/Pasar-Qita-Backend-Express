const express = require('express');
const Route = express.Router();
const categoryController = require('../controllers/category')
const Auth = require('../helpers/auth')
const MiscHelper = require('../helpers/helpers')
const Redis = require('../helpers/redis')

Route
    .all('/*', Auth.authInfo)
    .get('/', Redis.cacheGetAllCategory, categoryController.getCategory)
    .get('/:id_category', Redis.clearGetAllCategory, categoryController.categoryDetail)
    .post('/', Redis.clearGetAllCategory, categoryController.insertCategory)
    .patch('/:id_category', Redis.clearGetAllCategory, categoryController.updateCategory)
    .delete('/:id_category', Redis.clearGetAllCategory, categoryController.deleteCategory)

module.exports = Route