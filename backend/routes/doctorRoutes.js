const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// handleBuy
router.post('/',doctorController.patient_appointment);

module.exports = router;