const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// handleBuy
router.get('/get-doctors',doctorController.getController);

module.exports = router;