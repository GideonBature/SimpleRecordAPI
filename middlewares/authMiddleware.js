const { header, body, validationResult } = require('express-validator');

const validateRegistration = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    body('firstName')
        .isLength({ min: 2 })
        .withMessage('First name is required and must be at least 2 characters long'),
    body('lastName')
        .isLength({ min: 2 })
        .withMessage('Last name is required and must ve at least 2 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

const validateLogin = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

const validateLogout = [
    header('Authorization')
        .exists({ checkFalsy: true })
        .withMessage('Authorization header is required')
        .matches(/^Bearer [A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .withMessage('Invalid token format'),

    (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }
]

module.exports = { validateRegistration, validateLogin, validateLogout };