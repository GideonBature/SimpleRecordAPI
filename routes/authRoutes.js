const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const { validateRegistration, validateLogin, validateLogout } = require('../middlewares/authMiddleware');

router.post('/user/signup', validateRegistration,  authController.registerUser);
router.post('/user/signin', validateLogin, authController.loginUser);
router.post('/user/signout', validateLogout, authController.logoutUser);

module.exports = router;