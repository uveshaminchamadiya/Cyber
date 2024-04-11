import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        image : {type : String},
        desc : {type : String},
        price : {type : String},
        username : {type : String}
    }
)

const Cart = mongoose.models.Cart || mongoose.model('Cart', dataSchema);

export default Cart