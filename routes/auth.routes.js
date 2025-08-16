const express = require('express');
const { errorResponse, successResponse } = require('../utils/response');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require("bcrypt");
const UserDetails = require("../module/UserSchema");

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    try {
        console.log("Register", req.body);
        const { username, email, password } = req.body;
        // check user 
        const currUser = await UserDetails.findOne({ email });
        if (currUser) {
            return errorResponse(res, [], statusCode= StatusCodes.CONFLICT);
        }
        const hadshedpassword = await bcrypt.hash(password, 10);
        const user = new UserDetails({
            username,
            password: hadshedpassword,
            email,
        });
        await user.save(); 
        successResponse(res, data='Register Succesfull', statusCode = StatusCodes.CREATED);
    } catch (error) {
        errorResponse(res, error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        // const { email, password } = req.body;
        // const data = await loginUser(email, password);
        const data = [{
            message: "Login Success",
        }];
        successResponse(res, data, StatusCodes.OK);
    } catch (error) {
        errorResponse(res, error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

// get all users
router.get('/users', async (req, res) => {
    try {
        const users = await UserDetails.find();
        return successResponse(res, data = users, StatusCodes.OK);
    } catch (error) {
        errorResponse(res, error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

module.exports = router;
