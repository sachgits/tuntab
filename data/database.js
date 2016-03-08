/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {User} from './userSchema';
import * as bcryp from 'bcrypt';
import {join,normalize} from 'path';
import {mkdirSync} from 'fs';

user = new User();


export function createUser(age,username,email,password,gender,fname,lname){
    var photo_album = join(process.cwd(),'profile',username);
    var name = {firstname:fname,lastname:lname};
    var salt = bcryp.genSaltSync(10);
    var hashedPass = bcryp.hashSync(password,salt);

    var user = new User({age:age,username:username,email:email,password:hashedPass,gender:gender,photoAlbum:photo_album,
        name:name});
    user.save(function(err,newUser){
        if(err){
            return console.error(err);
        }
        console.log(newUser);
    });
}
