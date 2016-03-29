/**
 * Created by sachg on 2/16/2016.
 */


import {mongoose} from './dbConfig';
import {productsSchema} from './ProductsSchema';
import {addressSchema} from './addressSchema';
import {destinationSchema} from './locationSchema';
var Schema = mongoose.Schema;




var userSchema = new Schema({
    id: Schema.ObjectId,//TODO not sure if this is the right ObjectId
    graphQLID: String,
    age: {type: Number},
    username: {type:String, required: true, unique: true},
    email: {type:String, lowercase: true, required: true},
    password: {type: String, required: true},
    timeCreated: {type:Date, default: Date.now},
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

userSchema.set('toJson', {getters:true});
module.exports =  userSchema;
let Users = mongoose.model('Users', userSchema);

module.exports = Users;

module.exports.getListOfUsers = ()=> {
    return new Promise((resolve, reject)=>{
        Users.find({}).exec((err,res)=>{
            if(err){
                console.error(err);
                reject(err)
            }
            resolve(res);
        })
    })
};