/**
 * Created by sachg on 2/16/2016.
 */
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var productsSchema = new Schema({
    id: {type:String,required:true,unique:true,index:true,default:mongoose.Types.ObjectId},
    title:{type:String,required:true},
    description:String,
    quantity:{type:Number,required:true,default:0},
    value: Number,
    photoAlbum:{type:String,required:true},
    dateTime_created: {type: Date, default: Date.now},
    manufacture_details:{
        model_number: {type:string},IME:String
    }
});

let Product = mongoose.model('Product', productsSchema);

module.exports = Product;

module.exports.getProductById = (root, {id}) => {

}

module.exports.getProductList = () => {

}

module.exports.createNewProduct = () => {

}

module.exports.updateProduct = (root, {id}) => {

}


