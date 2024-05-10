const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../middlewares/authMiddleware');

router.post('/user/register', validateRegistration,  authController.registerUser);
router.post('/user/login', validateLogin, authController.loginUser);
router.post('/user/logout', authController.logoutUser);

module.exports = router;