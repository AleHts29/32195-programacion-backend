import mongoose from "mongoose";

const ProductoSchema = mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true}
});

const ProductoModel = mongoose.model('productos', ProductoSchema);

export default ProductoModel;