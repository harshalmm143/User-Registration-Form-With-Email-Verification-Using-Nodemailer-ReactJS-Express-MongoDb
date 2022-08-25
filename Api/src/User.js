const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    UserName: String,
    UserEmail: String,
    UserPassword: String,
    UserLanguage: String,
    UserMobile: Number,
    IsVarified: { type: Boolean, default: false },
    IsEnable: { type: Boolean, default: false },
    CreateDate: Date

})
module.exports = mongoose.model("User", UserSchema)