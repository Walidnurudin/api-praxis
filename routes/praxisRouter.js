const express = require('express');
const router = express.Router();
const praxisController = require('../controller/praxisController');

// PESERTA
router.post('/api/peserta/post', praxisController.pesertaPost);
router.delete('/api/peserta/:id/delete', praxisController.verifyToken, praxisController.pesertaDelete);
router.get('/api/peserta/get', praxisController.verifyToken, praxisController.pesertaGet);
router.get('/api/peserta/:id', praxisController.verifyToken, praxisController.pesertaDetail);

// USER/ADMIN
router.post('/api/users/registrasi', praxisController.registrasi);
router.post('/api/users/login', praxisController.login);
router.get('/api/users/get', praxisController.verifyToken, praxisController.usersGet);
router.get('/api/users/:id', praxisController.verifyToken, praxisController.usersDetail);

module.exports = router;