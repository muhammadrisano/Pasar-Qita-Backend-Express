require('dotenv').config()
const MiscHelper = require('../helpers/helpers')
const redis = require('redis')
const REDIS_PORT = process.env.PORT_REDIST || 6379;
const client = redis.createClient(REDIS_PORT)
module.exports = {
    cacheGetAllCategory: (req, res, next) => {
        client.get('getallcategory', (err, data) => {
            if (err) throw err;

            if (data !== null) {
                MiscHelper.response(res, JSON.parse(data), 200);
            } else {
                next();
            }
        })
    },
    clearGetAllCategory: (req, res, next) => {
        client.del('getallcategory')
        next();
    }
}