// import mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// data schema
const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        unique: false
    },
    lName: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    }
});

// add plugin
UserSchema.plugin(passportLocalMongoose);

// export module
module.exports('User', userSchema);