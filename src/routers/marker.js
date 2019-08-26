const express = require('express');
const Route = express.Router();
const marketController = require('../controllers/market')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', marketController, getMarket)
    .get('/:id_market', patternController.marketDetail)
    .post('/', marketController.insertMarket)
    .patch('/:id_market', marketController.updateMarket)
    .delete('/:id_market', marketController.deleteMarket)

module.exports = Route