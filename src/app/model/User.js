import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        name : {type : String},
        email : {type : String},
        password : {type : String},
        address : {type : String}
    }
)

const User = mongoose.models.User || mongoose.model('User', dataSchema);

export default User