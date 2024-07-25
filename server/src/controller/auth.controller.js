const User = require('../models/users.model');

async function getMe(req, res){
    //Get logged user Details
    try {
        const user = await User.findById(req.usertoken).select("-password");
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({message: "Error fetching user details", error});
    }
}

module.exports = {
    getMe
}