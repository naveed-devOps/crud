const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const emailController = require('../controllers/emailController');
const otpController = require('../controllers/otpController');

// Routes for userController
router.get('/country', userController.getAllCountry);
router.get('/country/id/:id', userController.getCountryById);
// router.get('/users/name/:userName', userController.getUserByName);
// router.get('/users/age/:userAge', userController.getUserByAge);

// Routes for create a user
router.post('/country', userController.createCountry);
// Routes for delete a userz
router.delete('/country/id/:id', userController.deletedCountryById);
// router.delete('/users/name/:userName', userController.deletedUserByName);
// router.delete('/users/age/:userAge', userController.deletedUserByAge);
// Routes for update a user
router.put('/country/id/:id', userController.updatedCountryById);
// router.put('/users/name/:userName', userController.updatedUserByName);
// router.put('/users/age/:userAge', userController.updatedUserByAge);




// Routes for emailController
//router.post('/generate-otp', emailController.generateOTP);


// Routes for otpController
//router.post('/reset-password', otpController.resetPassword);
// Other OTP-related routes...

// Routes for authController
router.post('/login', authController.login);

//router.get('/protected-route', authController.checkToken);


module.exports = router;
