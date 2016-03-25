/**
 * Created by sachg on 2/16/2016.
 */



import {productsSchema} from './../../ProductsSchema';
import {addressSchema} from './../../addressSchema';
import {destinationSchema} from './../../locationSchema';

//TODO: there is now way we are going to setup connection everywhere Working on this next
const MONGO_CONNECTION = "mongodb://localhost/tuntab";
const MONGO_USER = "admin";
const MONGO_PASS = "12345";

import mongoose from 'mongoose';
if(!mongoose.connection)
    mongoose.connect(MONGO_CONNECTION);

var Schema = mongoose.Schema;
var SchemaType = mongoose.SchemaType;

var userSchema = new Schema({
    id: {type:Schema.ObjectId,required:true,unique:true},
    age: {type: Number, min: 15, max: 75},
    username: {type:String, required: true, unique: true},
    email: {type:String, lowercase: true, required: true},
    password: {type: String, required: true},
    timeCreated: {type: Date, default: Date.now},
    gender: {type: Boolean, default: 0, comment:"defaults to 0 for MALE"},
    photoAlbum: {type:String, required: true},
    name: {
        firstname: String,
        lastname: String
    },
    lastLogin: {type: Date, onUpdate: Date.now},
    address: [addressSchema],
    destination: [destinationSchema],
    products: [productsSchema]
});

userSchema.set('toJSON', {getters:true});

let User = mongoose.model('User', userSchema) ;//potential error on babel module.exports vs export

module.exports = User;

module.exports.getUserById = (id)=> {
    return new Promise((resolve,reject)=>{

        User.findOne({username:id}).exec((err,res)=>{
            if(err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
};

module.exports.updateUser = (user) => {
    return new Promise((resolve, reject)=> {
        user.save((err, res) => {
            err ? reject(err): resolve(res);
        });
    });
};

module.exports.getListOfUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}).exec((err,res) => {
            err ? reject(err): resolve(res);
        });
    });
};