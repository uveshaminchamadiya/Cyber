import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        image : {type : String},
        desc : {type : String},
        price : {type : String}
    }
)

const ProductData = mongoose.models.ProductData || mongoose.model('ProductData', dataSchema);

export default ProductData