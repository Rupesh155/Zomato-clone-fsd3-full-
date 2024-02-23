
let mongoose = require('mongoose')
let express = require('express')
let app = express()
app.use(express.json())
let loginRoutes = require('./routes/login')
app.use(express.urlencoded({ extended: true }));
let userRoutes = require('./routes/user')
let restraurantRoutes = require('./routes/restraurant')
let productRoutes = require('./routes/Products')


mongoose.connect('mongodb://127.0.0.1:27017/zomato').
    then(() => {
        console.log('db');

    }).catch((err) => {
        console.log(err);

    })

app.use('/api', userRoutes)
app.use('/api', loginRoutes)
app.use('/api', restraurantRoutes)
app.use('/api', productRoutes)


//    localhost:4000/api/users

app.listen(4000, () => {
    console.log('server running on port 4000');

})


// User Schema:

// _id: ObjectId
// name: String
// email: String
// password: String (hashed)
// role: String (user/admin)


// Restaurant Schema:
// _id: ObjectId
// name: String
// description: String
// address: String
// cuisine: String
// opening_hours: String
// contact_number: String
// image: String (URL)
// menu: Array of MenuItem objects


// MenuItem Schema:
// name: String
// description: String
// price: Number

// Rating Schema:
// user_id: ObjectId (ref: User)
// rating: Number

// Review Schema:
// user_id: ObjectId (ref: User)
// comment: String

// Order Schema:
// user_id: ObjectId (ref: User)
// restaurant_id: ObjectId (ref: Restaurant)
// items: Array of OrderItem objects
// total_price: Number
// status: String (pending/confirmed/delivered)
// created_at: Date

// OrderItem Schema:
// menu_item_id: ObjectId (ref: MenuItem)
// quantity: Number

// Admin Schema:
// _id: ObjectId
// user_id: ObjectId (ref: User)
























