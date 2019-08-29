const express = require('express');
const Route = express.Router();
const storeController = require('../controllers/store')
const Auth = require('../helpers/auth')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        // cb(null, new Date().toISOString() + file.originalname);
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

Route
    .all('/*', Auth.authInfo)
    .get('/', storeController.getStore)
    .get('/:id_store', storeController.storeDetail)
    .get('/bymarket/:id_market', storeController.getByMarket)
    .get('/byuser/:id_user', storeController.getByUser)
    .post('/', storeController.insertStore)
    .patch('/:id_store', upload.single('photo'), storeController.updateStore)
    .delete('/:id_store', storeController.deleteStore)

module.exports = Route