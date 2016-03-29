/**
 * Created by sachg on 2/16/2016.
 */



import {productsSchema} from './../Products/ProductsSchema';
import {addressSchema} from './../Address/addressSchema';
import {destinationSchema} from './../../locationSchema';
import path from 'path';
import bcrypt from 'bcrypt';
var faker = require('faker');
import mongoose from 'mongoose';

import Product from '../Products/ProductsSchema';

//TODO: there is now way we are going to setup connection everywhere Working on this next


var Schema = mongoose.Schema;
var SchemaType = mongoose.SchemaType;

var userSchema = new Schema({
    age: {type: Number},
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
    products: [{type:mongoose.Types.ObjectId,ref:'Products'}]
});

userSchema.set('toJSON', {getters:true,virtuals:true});

let User = mongoose.model('User', userSchema) ;//potential error on babel module.exports vs export

module.exports = User;

module.exports.getUserById = (id)=> { //TODO: remember to add root
    return new Promise((resolve,reject)=>{
        User.findOne({_id:id}).exec((err,res)=>{
            if(err) {
                console.error(err);
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

module.exports.createNewFakeUsers = () => {
    var username = faker.internet.userName();
    var photo_album = path.join(process.cwd(),'profiles', username);
    var password = faker.internet.password();

    var salt = bcrypt.genSaltSync(10);
    var hash_pass = bcrypt.hashSync(password, salt);

    var firstname = faker.name.firstName();
    var lastname =  faker.name.lastName();

    var email = faker.internet.email();
    var gender = faker.random.boolean();
    var time_created = faker.date.recent();

    var last_login = faker.date.recent();
    var age = faker.random.number();
    var new_user = new User({username: username,email:email,password,hash_pass,
        name: {firstname:firstname,lastname:lastname},timeCreated:time_created, photoAlbum:photo_album,
    gender:gender,lastLogin:last_login,age:age});

    return new Promise((resolve, reject)=> {
        new_user.save((err, res) => {
            if(err){
                console.error(err);
                reject(err)
            }
            else
            {
                console.log(res);
                resolve(res);
            }
        });
    });


}