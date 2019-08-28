const express = require('express');
const Route = express.Router();
const subcategoryController = require('../controllers/subcategory')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', subcategoryController.getSubcategory)
    .get('/:id_subcategory', subcategoryController.subcategoryDetail)
    .get('/bycategory/:id_category', subcategoryController.getbycategory)
    .post('/', subcategoryController.insertSubcategory)
    .patch('/:id_subcategory', subcategoryController.updateSubcategory)
    .delete('/:id_subcategory', subcategoryController.deleteSubcategory)


module.exports = Route