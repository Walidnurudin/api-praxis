const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pesertaSchema = new Schema({
    namaUser: {
        type: String,
        require: true
    },
    emailUser: {
        type: String,

    },
    program: {
        type: String,

    },
    tanggalLahir: {
        type: String,

    },
    tempatLahir: {
        type: String,

    },
    nomorHape: {
        type: String,

    },
    kotaAsal: {
        type: String,

    },
    alamat: {
        type: String,

    },
    pendidikan: {
        type: String,

    },
    namaKampus: {
        type: String,

    },
    semester: {
        type: String
    },
    alamatKampus: {
        type: String,

    },
    pengalamanKerja: {
        type: String
    },
    pengalamanProject: {
        type: String
    },
    alasanIkut: {
        type: String,

    },
    komitmen: {
        type: String,

    },
    referensi: {
        type: String,

    },
    mediaSosial: {
        type: String,

    },
    bootCamp: {
        type: String
    },
    uploadedFileResponses: {
        type: String
    },
    uploadedFiles: {
        type: String
    },
})

const Peserta = mongoose.model('pesertas', pesertaSchema);
module.exports = Peserta;