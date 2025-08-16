const express = require('express');
const { errorResponse, successResponse } = require('../utils/response');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    try {
        // const data = await registerUser(req.body);
        const data = [{
            message: "Registration Success",
        }];
        successResponse(res, data, StatusCodes.OK);
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

module.exports = router;
