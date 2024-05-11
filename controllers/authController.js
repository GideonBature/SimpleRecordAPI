const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secret } = require('../config/config');

exports.registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const { password } = user;
        user['password'] = await bcrypt.hash(password, 10);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'email doesnot exists' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1d' });

        res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.logoutUser = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
