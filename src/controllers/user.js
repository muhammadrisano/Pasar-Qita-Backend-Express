const userModels = require('../models/user')
const MiscHelper = require('../helpers/helpers')
const jwt = require('jsonwebtoken');

module.exports = {
    getUser: (req, res) => {
        const search = req.query.search;
        userModels.getUser(seacrh)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    register: (req, res) => {
        const salt = MiscHelper.generateSalt(18)
        const passwordHash = MiscHelper.setPassword(req.body.password, salt)
        const data = {
            email: req.body.email,
            password: passwordHash.passwordHash,
            name: req.body.name,
            telp: req.body.telp,
            address: req.body.address,
            photo: req.body.photo,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            salt: passwordHash.salt,
            token: "",
            role_id: 3,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }
        userModels.register(data)
            .then((resultRegister) => {
                MiscHelper.response(res, resultRegister, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    login: (req, res) => {
        const email = req.body.email
        const password = req.body.password
        userModels.getByEmail(email)
            .then((result) => {
                const dataUser = result[0]
                const usePassword = MiscHelper.setPassword(password, dataUser.salt).passwordHash
                if (usePassword === dataUser.password) {
                    dataUser.token = jwt.sign({
                        userid: dataUser.id_user
                    }, process.env.SECRET_KEY, { expiresIn: '1h' });
                    delete dataUser.salt
                    delete dataUser.password
                    return MiscHelper.response(res, dataUser, 200)
                } else {
                    return MiscHelper.response(res, null, 403, 'Wrong passwrod !')
                }
            })
            .cach((error) => {
                console.log(error)
            })
    },
    deleteUser: (req, res) => {
        const id_user = req.params.id_user
        userModels.deleteUser(id_user)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}