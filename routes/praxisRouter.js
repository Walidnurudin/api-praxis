const express = require('express');
const router = express.Router();
const praxisController = require('../controller/praxisController');

router.post('/api/peserta/post', praxisController.pesertaPost);
router.post('/api/peserta/get', praxisController.pesertaGet);
router.post('/api/users/registrasi', praxisController.registrasi);
router.post('/api/users/login', praxisController.login);

module.exports = router;