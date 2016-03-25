/**
 * Created by sachg on 2/16/2016.
 */


const MONGO_CONNECTION = "mongodb://localhost/tuntab";
const MONGO_USER = "admin";
const MONGO_PASS = "12345";

import mongoose from 'mongoose';
if(!mongoose.connection)
    mongoose.connect(MONGO_CONNECTION);


var Schema = mongoose.Schema;



var productsSchema = new Schema({
    sku: Schema.ObjectId,
    title: String,
    description:String,
    quantity:Number,
    value: Number,
    photoAlbum: String,
    dateTime_created: {type: Date, default: Date.now},
    manufacture_details:{
        model_number: String
    }
});

export {productsSchema};

