const express = require('express');
const authController = require('../controllers/authController');
const { upload } = require('../multer');
//router object
const router = express.Router();

//routing
//REGISTER irrespective of doctor or patient || METHOD POST
router.post('/register', authController.registerController);

router.post('/register-doctor', upload.single("avatar"), authController.registerDoctorController);
router.post('/register-patient', upload.single("avatar"), authController.registerPatientController);

//LOGIN || METHOD POST
router.post('/login', authController.loginController);

//forgotPassword
router.post('/forgot-password', authController.forgotPasswordController);

module.exports = router;