/**
 * Created by sachg on 2/16/2016.
 */


const MONGO_CONNECTION = "mongodb://localhost/tuntab";
const MONGO_USER = "admin";
const MONGO_PASS = "12345";

import mongoose from 'mongoose';

mongoose.connect(MONGO_CONNECTION);

var Schema = mongoose.Schema;
var SchemaType = mongoose.SchemaType;

var addressSchema = Schema({
id: Schema.ObjectId,
    street: String,
    city:String,
    state:String,
    country:String,
    email:String,
    phone:String,
});

export {addressSchema};