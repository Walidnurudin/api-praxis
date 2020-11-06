const Peserta = require('../model/pesertaModel');

const pesertaPost = (req, res) => {
    const siswa = new Peserta(req.body);

    siswa.save()
        .then(res => {
            console.log('benar', res)
        })
        .catch(err => {
            console.log('salah', err)
        })
}

module.exports = {
    pesertaPost
}