const { Router } = require('express');
const authenticateJWT = require('../middlewares/auth');
const authentications = require('../services/authentications/routes');
const stores = require('../services/stores/routes');
const users = require('../services/users/routes');
const router = Router();

router.use('/api', authentications);
router.use('/api', authenticateJWT, users);
router.use('/api', authenticateJWT, stores);

module.exports = router;