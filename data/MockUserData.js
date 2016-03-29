/**
 * Created by sachg on 2/25/2016.
 */

import {User} from './Models/User/userSchema';
import {Faker} from 'faker';


var username;
var email;
var age;
var password;
var timestampRecent;
var gender;
var photoAlbumImageUrl;
var pastLogin;
var city;
var StreetAddr;
var state;
var phoneNumber;
var addEmail;
var country;

var productName,productAdj,quantity,value,photoImgUrl,product;


var user = new User();

for(i = 0; i <= 100; i++){
    user({username:Faker.internet.userName(),password:Faker.internet.password(),email:Faker.internet.email(),
        gender: Faker.random.boolean(),photoAlbum:Faker.image.imageUrl(),name:{firstname: Faker.name.firtName(),lastname:
            Faker.name.lastName()},lastLogin:Faker.date.past()});
    user.save(function(err){
        if(err){
            console.log(err.message);
        }else{
            console.log("saved");
        }
    });
}



