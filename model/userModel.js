const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Username has been used"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email has been used'],
        lowercase: true,
        validate: [isEmail, 'Please enter valid email']
    },
    password: {
        type: String,
        minlength: [6, 'Minimum length password is 6 characters'],
        required: true
    }
});

// hooks/middleware
userSchema.pre('save', async function(next) {
    // encrypt password
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password){
    // find email
    const User = await this.findOne({email});
    if(User){
        // compare password
        const Auth = await bcrypt.compare(password, User.password);
        if(Auth){
            return User;
        }
        throw Error('incorrect password!')
    }
    throw Error('incorrect email!')
}

const User = mongoose.model('users', userSchema);
module.exports = User;