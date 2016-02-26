/**
 * Created by sachg on 2/16/2016.
 */


import {mongoose} from './dbConfig';
import {productsSchema} from './ProductsSchema';
import {addressSchema} from './addressSchema';
import {destinationSchema} from './locationSchema';
var Schema = mongoose.Schema;
var SchemaType = mongoose.SchemaType;

var userSchema = new Schema({
    id: SchemaType.ObjectId,
    age: {type: SchemaType.number, min: 15, max: 75},
    username: {type:String, required: true, unique: true},
    email: {type:String, lowercase: true, required: true},
    password: {type: String, required: true},
    timeCreated: {timestamps: {createdAt: 'createdAt'}},
    gender: {type: Boolean, default: 0, comment:"defaults to 0 for MALE"},
    photoAlbum: {type:String, required: true},
    name: {
        firstname: String,
        lastname: String
    },
    lastLogin: {timestamps:{updateAt:'updateAt'}},
    address: [addressSchema],
    destination: [destinationSchema],
    products: [productsSchema]
});

module.exports = mongoose.model('User', userSchema) ;//potential error on babel module.exports vs export