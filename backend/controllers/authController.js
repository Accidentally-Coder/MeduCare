const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");
const authHelper = require('./../helpers/authHelper');
const path = require('path');
const doctorModel = require('../models/doctorModel');

// sign up
module.exports.registerController = async (req, res) => {
    try {
        const { email, answer, password, } = req.body;
        console.log(email, password, answer);

        //validation
        if (!email || !password || !answer) {
            return res.send({ message: 'All fields are required.' });
        }
        // check user from collection
        const existingUser = await userModel.findOne({ email });
        console.log(existingUser);
        //check existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Registered! Please log in.',
            });
        }
        //register user
        const hashedPassword = await authHelper.hashPassword(password);
        //save new user to the collection
        const user = await new userModel({
            email,
            password,
            answer,
            role:"0"
        }).save();
        
        return res.status(201).send({
            success: true,
            message: 'User Registered Successfully!',
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

//POST LOGIN

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation
        if (!email || !password) {
            return res.status(200).send({
                success: false,
                message: 'Invalid email or password',
            });
        }

        //get user by checking on the basis of email
        const user = await userModel.findOne({ email });

        //if user not found
        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'Email is not registered. Please register first.',
            });
        }

        const match = await authHelper.comparePassword(password, user.password);

        //if password does not match
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password! Please provide correct password again.'
            });
        }

        //token
        const token = JWT.sign(
            {
                _id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d',
            }
        );

        return res.status(200).send({
            success: true,
            message: 'User Logged in successfully !',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in login',
            error,
        });
    }
};

module.exports.forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;
        if (!email) {
            return res.status(400).send({ message: 'Email is required' });
        }
        if (!answer) {
            return res.status(400).send({ message: 'Answer is required' });
        }
        if (!newPassword) {
            return res.status(400).send({ message: 'NewPassword is required' });
        }

        const user = await userModel.findOne({ email, answer });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'Invalid email or answer'
            });
        }
        const hashed = await authHelper.hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed });
        return res.status(200).send({
            success: true,
            message: 'Password reset Successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Something went wrong',
            error
        });
    }
};

module.exports.registerDoctorController = async(req,res) => {
    try {
        const {name,phone,license,address,email,specialization,fees} = req.body;
        const fileName = req.file.buffer;
        if(!name || !phone || !license || !address || !email || !specialization || !fees || !fileName){
            return res.send({message: "All fields are required"});
        }
        const doctor = await new doctorModel({
            name,
            phone,
            license,
            address,
            email,
            specialization,
            fees,
            fileName
        }).save();

        return res.status(201).send({
            success: true,
            message: 'User Registered Successfully!',
            doctor
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Something went wrong',
            error
        });
    }
}

// POST || register Patient
module.exports.registerPatientController = async(req,res) => {
    try {
        const {name,phone,license,address,email,specialization,fees} = req.body;
        const fileName = req.file.buffer;
        if(!name || !phone || !license || !address || !email || !specialization || !fees || !fileName){
            return res.send({message: "All fields are required"});
        }
        const doctor = await new doctorModel({
            name,
            phone,
            license,
            address,
            email,
            specialization,
            fees,
            fileName
        }).save();

        return res.status(201).send({
            success: true,
            message: 'User Registered Successfully!',
            doctor
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Something went wrong',
            error
        });
    }
}
