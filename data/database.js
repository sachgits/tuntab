/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */


import {User} from './Models/User/userSchema';

import userSchema from './userSchema';
import {mongoose} from './dbConfig';

import * as bcryp from 'bcrypt';
import * as Path from 'path';
import {mkdirSync} from 'fs';
var faker = require('faker');//for mock data

import {globalIdField} from 'graphql-relay'



export class Person{
    createUser(age,username,email,password,gender,fname,lname){
        var photo_album = Path.join(process.cwd(),'profile',username);
        var name = {firstname:fname,lastname:lname};
        var salt = bcryp.genSaltSync(10);
        var hashedPass = bcryp.hashSync(password,salt);
        var graphQL_ID = '1User2';//TODO: working on global id


        var user = mongoose.model('user', userSchema);
        this.User = new user({graphQLID:graphQL_ID,age:age,username:username,email:email,password:hashedPass,gender:gender,
            photoAlbum:photo_album,
            name:name});

        this.User.save(function(err,newUser){
            if(err){
                return console.error(err);
            }
            console.log(newUser);
        });
    }
    constructor(user){

        for(var i=0;i<10;i++) { //mock data for user
            this.createUser(faker.random.number(), faker.internet.userName(), faker.internet.email(), faker.internet.password(),
                faker.random.boolean(), faker.name.firstName(), faker.name.lastName());
        }
        if(user instanceof User)
            this.User = user;
        else{
            var individual = mongoose.model('individual', userSchema);
            this.User = new individual();//TODO: remove quick hack as it does not give us specific user
        }
    }

    /*
    function need more thinking of wheather should live on constructor or what is it a global or static
     */
    getUser(graph_id){
        return this.User = user.findOne({id:graph_id});
    }
    getUserAge(){
        return this.User.age;
    }
    getUserName(){
        return this.User.name;
    }
    getUserUsername(){
        return this.User.username;
    }
    getUserEmail(){
        return this.User.email;
    }
    getUserPassword(){
        return this.User.password;
    }
    getUserGender(){
        return this.User.gender;
    }
    getUserLastLogin() {
        return this.User.lastLogin;
    }
    getUserPhotoAlbum(){
        return this.User.photoAlbum; //working on this part
    }
    getUserTimeCreated(){ return this.User.timeCreated;}
    getUserId(){return this.User.id}

}


/*export function createUser(age,username,email,password,gender,fname,lname){
    var photo_album = join(process.cwd(),'profile',username);
    var name = {firstname:fname,lastname:lname};
    var salt = bcryp.genSaltSync(10);
    var hashedPass = bcryp.hashSync(password,salt);
    var graphQL_ID = globalIdField('User');

    var user = new User({graphQLID:graphQL_ID,age:age,username:username,email:email,password:hashedPass,gender:gender,photoAlbum:photo_album,
        name:name});
    user.save(function(err,newUser){
        if(err){
            return console.error(err);
        }
        console.log(newUser);
    });
} */