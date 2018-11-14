const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
// define the schema for our user model
const userSchema = mongoose.Schema({
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    firstName: String,
    lastName: String
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET");
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
