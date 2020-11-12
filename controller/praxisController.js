const Peserta = require('../model/pesertaModel');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');


// FORMAT OF TOKEN
// Authorization: Bearer <bearer_token>

// verify token
const verifyToken = function (req, res, next) {
    // get auth headers value
    const bearerHeaders = req.headers.authorization;
    console.log('middleware ', typeof bearerHeaders)
    // check if bearer is undefined
    if (typeof bearerHeaders !== 'undefined') {
        // split token from array
        const bearer = bearerHeaders.split(' ');
        // get token from array
        console.log(bearer)
        const bearerToken = bearer[1];
        // set the token
        req.token = bearerToken;
        // next middleware
        next();
    } else {
        // forbidden
        res.sendStatus(403);
    }
}

// create token
const createToken = (id) => {
    return jwt.sign({ id }, 'praxis');
}

// handle error
const handleError = (err) => {
    console.log(err);
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === "incorrect email!") {
        errors.email = 'that email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password!') {
        errors.password = 'that password is incorrect';
    }

    return errors;
}

// action
const Home = async (req, res) => {
    res.render("index")
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        res.status(200).json({ token, username: user.username });
    } catch (err) {
        const errors = handleError(err);
        res.status(400).json({ errors });
    }
}

const registrasi = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        res.status(200).json({ user: user.username, status: "Sukses mendaftar" });
    } catch (err) {
        res.status(400).json(err);
    }
}

const usersGet = (req, res) => {
    jwt.verify(req.token, 'praxis', async (err) => {
        if(err){
            res.send({meassage: "please verify", err})
        }else{
            try {
                const result = await User.find();
                res.send(result)
            } catch(err){
                res.send({message: "error"})
            }
        }
    })
}

const usersDetail = (req, res) => {
    const id = req.params.id;

    jwt.verify(req.token, 'praxis', async (err) => {
        if(err){
            res.send({meassage: "please verify", err})
        }else{
            try {
                const result = await User.findById(id);
                res.send(result)
            } catch(err){
                res.send({message: "error"})
            }
        }
    })
}

const pesertaPost = (req, res) => {
    const siswa = new Peserta(req.body);

    siswa.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
}

const pesertaDelete = (req, res) => {
    const id = req.params.id;

    jwt.verify(req.token, 'praxis', async (err, data) => {
        if(err){
            console.log(err);
        }else{
            try {
                const result = await Peserta.findByIdAndDelete(id);
                res.send({message: "Berhasil menghapus"})
            }catch(err){
                res.send({err})
            }
        }
    })
}

const pesertaGet = (req, res) => {
    jwt.verify(req.token, 'praxis', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            Peserta.find()
                .then(result => {
                    res.send({ result })
                })
                .catch(err => {
                    res.send(err)
                })
        }
    })
}

const pesertaDetail = (req, res) => {
    const id = req.params.id;

    jwt.verify(req.token, 'praxis', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            Peserta.findById(id)
                .then(result => {
                    res.send({ result })
                })
                .catch(err => {
                    res.send(err)
                })
        }
    })

}

module.exports = {
    Home,
    verifyToken, // verify token
    pesertaPost,
    pesertaGet,
    pesertaDetail,
    pesertaDelete,
    registrasi,
    login,
    usersGet,
    usersDetail
}