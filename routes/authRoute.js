const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { 
    allFieldsOk, 
    emailFormatOk, 
    passwordsEqual, 
    hashing 
} = require('../functions/authentication');


router.post('/register', async (req, res) => {

    //Retrieve fields
    const { name, email, password, confirmPassword } = req.body;

    //Check if all required fields have been filled
    if (!allFieldsOk(name, email, password, confirmPassword)) {
        return res
        .status(400)
        .json({ message: 'All fields must be filled!' });
    }

    //Check email structure
    if (!emailFormatOk(email)) {
        return res
        .status(400)
        .json({ message: 'Email format not valid!' }); 
    }

    //Check if user has already registered
    const user = await User.findOne({ email });
    if (user) {
        return res
        .status(400)
        .json({ message: 'You are already registered with this email!' });
    }

    //Check password length and special characters
    /* .... */

    //Check if password is equal to the confirmed password
    if (!passwordsEqual(password, confirmPassword)) {
        return res
        .status(400)
        .json({ message: 'Passwords are different!' });
    }

    //Hashing password
    const hashedPassword = await hashing(password);
    if (!hashedPassword) {
        return res
        .status(500)
        .json({ message: 'Could not hash the password!' })
    }

    //Create new user
    const newUSer = new User({ name, email, password: hashedPassword });

    try {
        await newUSer.save();
        res
        .status(201)
        .json({ message: 'User succesfully created!' });
    } catch(err) {
        res
        .status(500)
        .json({ message: err.message });
    }
});


module.exports = router;