// import mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// data schema
const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    country: String,
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// add plugin
UserSchema.plugin(passportLocalMongoose);

// export module
module.exports('user', userSchema);