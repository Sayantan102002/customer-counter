import mongoose from "mongoose";

const productSchema = mongoose.Schema({


productname:{type:String},
companyname:{type:String},
productquantity:{type:String},
productSellingquantity:{type:String},
productdate:{type:String},
userId:{type:String},


})
export default mongoose.model("product",productSchema);