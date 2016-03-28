/**
 * Created by sachg on 2/16/2016.
 */

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var addressSchema = new Schema({
id: Schema.ObjectId,
    street: String,
    city:String,
    state:String,
    country:String,
    email:String,
    phone:String
});

export {addressSchema};