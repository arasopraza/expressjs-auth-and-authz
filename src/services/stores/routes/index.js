const { Router } = require('express');
const StoreController = require('../controllers/StoreController');
const router = Router();

router.post('/stores', StoreController.createStore);
router.put('/stores', StoreController.editStore);

module.exports = router;