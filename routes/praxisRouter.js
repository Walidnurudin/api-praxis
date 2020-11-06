const express = require('express');
const router = express.Router();
const praxisController = require('../controller/praxisController');

router.post('/api/peserta/post', praxisController.pesertaPost);

module.exports = router;