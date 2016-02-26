'use strict';

var _userSchema = require('./userSchema');

var _faker = require('faker');

/**
 * Created by sachg on 2/25/2016.
 */

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

var productName, productAdj, quantity, value, photoImgUrl, product;

var user = new _userSchema.User();

for (i = 0; i <= 100; i++) {
    user({ username: _faker.Faker.internet.userName(), password: _faker.Faker.internet.password(), email: _faker.Faker.internet.email(),
        gender: _faker.Faker.random.boolean(), photoAlbum: _faker.Faker.image.imageUrl(), name: { firstname: _faker.Faker.name.firtName(), lastname: _faker.Faker.name.lastName() }, lastLogin: _faker.Faker.date.past() });
    user.save(function (err) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("saved");
        }
    });
}

//# sourceMappingURL=MockUserData-compiled.js.map