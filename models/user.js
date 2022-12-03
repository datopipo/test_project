  const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 30,

    },
    birthday: {
        type: Date,
        validate: function isOver18(dateOfBirth) {
            // find the date 18 years ago
            const date18YrsAgo = new Date();
            date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
            return dateOfBirth <= date18YrsAgo;
        },
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: function checkEmailDomain(email) {
            let getDomain = email.substring(email.indexOf('@') + 1);
            if (getDomain !== 'newage.io') {
                console.log(getDomain + " not allowed");
                return false;
            }
        },
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)
