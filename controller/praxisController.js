const Peserta = require('../model/pesertaModel');

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
    pesertaPost
}