import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/cyber");
        // console.log("Connected successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDatabase;
