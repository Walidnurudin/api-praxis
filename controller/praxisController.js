const Peserta = require('../model/pesertaModel');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

// create token
const createToken = (id) => {
    return jwt.sign({id}, 'praxis');
}

// handle error
const handleError = (err) => {
    console.log(err);
    let errors = { email: '', password: '' };

    // incorrect email
    if(err.message === "incorrect email!"){
        errors.email = 'that email is not registered';
    }

    // incorrect password
    if(err.message === 'incorrect password!'){
        errors.password = 'that password is incorrect';
    }

    return errors;
}

// action
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = await createToken(user._id);

        res.status(200).json({token});
        console.log(user, token)
    } catch (err) {
        const errors = handleError(err);
        res.status(400).json({errors});
    }
}

const registrasi = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const user = await User.create({username, email, password});
        res.status(200).json({user});
    }catch(err){
        res.status(400).json(err);
    }
}

const pesertaPost = (req, res) => {
    const siswa = new Peserta(req.body);

    siswa.save()
        .then(result => {
            console.log('benar', result);
            res.send(result)
        })
        .catch(err => {
            console.log('salah', err)
            res.send(err)
        })
}

module.exports = {
    pesertaPost,
    registrasi,
    login
}