const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pesertaSchema = new Schema({
    namaUser: {
        type: String,
        require: true
    },
    emailUser: {
        type: String,
        require: true
    },
    program: {
        type: String,
        require: true
    },
    tanggalLahir: {
        type: String,
        require: true
    },
    tempatLahir: {
        type: String,
        require: true
    },
    nomorHape: {
        type: String,
        require: true
    },
    kotaAsal: {
        type: String,
        require: true
    },
    alamat: {
        type: String,
        require: true
    },
    pendidikan: {
        type: String,
        require: true
    },
    namaKampus: {
        type: String,
        require: true
    },
    semester: {
        type: String
    },
    alamatKampus: {
        type: String,
        require: true
    },
    pengalamanKerja: {
        type: String
    },
    pengalamanProject: {
        type: String
    },
    alasanIkut: {
        type: String,
        require: true
    },
    komitmen: {
        type: String,
        require: true
    },
    referensi: {
        type: String,
        require: true
    },
    mediaSosial: {
        type: String,
        require: true
    },
    bootCamp: {
        type: String
    },
    uploadedFiles: {
        type: String,
        require: true
    },
})

const Peserta = mongoose.model('pesertas', pesertaSchema);
module.exports = Peserta;
