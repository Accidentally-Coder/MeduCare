const express = require('express');
const authController = require('../controllers/authController');
//router object
const router = express.Router();

//routing
//REGISTER irrespective of doctor or patient || METHOD POST
router.post('/register', authController.registerController);

router.post('/register-doctor', authController.registerDoctorController);
router.post('/register-patient', authController.registerPatientController);

//LOGIN || METHOD POST
router.post('/login', authController.loginController);

//forgotPassword
router.post('/forgot-password', authController.forgotPasswordController);

module.exports = router;