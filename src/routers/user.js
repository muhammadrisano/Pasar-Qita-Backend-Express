const express = require('express');
const Route = express.Router();
const userController = require('../controllers/user')
const Auth = require('../helpers/auth')


Route
    .all('/*', Auth.authInfo)
    .get('/', userController.getUser)
    .get('/:id_user', userController.userDetail)
    .post('/register', userController.register)
    .post('/login', userController.login)
    .patch('/:id_user', userController.updateUser)
    .delete('/:id_user', userController.deleteUser)

module.exports = Route;