require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors');
const xssFilter = require('x-xss-protection');
const logger = require('morgan');
const userRoute = require('./src/routers/user');
const marketRoute = require('./src/routers/market');
const storeRoute = require('./src/routers/store')
const categoryRoute = require('./src/routers/category')
const subcategoryRoute = require('./src/routers/subcategory')
const itemRoute = require('./src/routers/item')
const cartRoute = require('./src/routers/cart')
const paymentRoute = require('./src/routers/payment')

app.use(cors());
app.use(xssFilter());
app.use(logger('dev'))
app.listen(port, () => {
    console.log(`\n App Listen port ${port}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRoute)
app.use('/market', marketRoute)
app.use('/store', storeRoute)
app.use('/category', categoryRoute)
app.use('/subcategory', subcategoryRoute)
app.use('/item', itemRoute)
app.use('/cart', cartRoute)
app.use('/payment', paymentRoute)