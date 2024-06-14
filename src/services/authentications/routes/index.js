const { Router } = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');
const router = Router();

router.post('/login', AuthenticationController.login);

module.exports = router;