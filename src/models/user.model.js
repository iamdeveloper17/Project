const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },
    email:{
        type:String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/1gpiq9yul/24-248253_user-profile-default-image-png-clipart-png-download.png"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel