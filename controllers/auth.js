const User =require('../models/User');
const CustomError = require('../helpers/error/CustomError');
const register = async (req,res,next) => {
    const name = "Göksu Aktaş";
    const email = "goksu@gmail.com";
    const password = "12345";

    try {
        const user = await User.create({
            name,
            email,
            password
        });
    
        res
        .status(200)
        .json({
            success: true,
            data: user
        });
    } catch (err) {
        return next(err);
    }
    // async await

    
};
const errorTest = (req,res,next) => {
    return next(new TypeError("TypeError"));
};

module.exports = {
    register,
    errorTest
}