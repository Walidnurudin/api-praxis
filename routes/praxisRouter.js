const express = require('express');
const router = express.Router();
const praxisController = require('../controller/praxisController');

router.post('/api/peserta/post', praxisController.pesertaPost);
router.post('/api/users/registrasi', praxisController.registrasi);

module.exports = router;