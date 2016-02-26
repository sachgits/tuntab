'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by sachg on 2/22/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _dbConfig = require('./dbConfig');

var _userSchema = require('./userSchema');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userModel = function () {
    function userModel() {
        _classCallCheck(this, userModel);

        user = new _userSchema.User();
    }

    _createClass(userModel, [{
        key: 'login',
        value: function login(username, password) {
            //TODO: password must be hashed
            user.find({ username: username, password: password });
        }
    }, {
        key: 'create',
        value: function create(username, password, email, age, gender, photoAlbum, firstname, lastname) {
            _userSchema.User.create({ username: username, password: password, email: email, age: age, gender: gender, photoAlbum: photoAlbum,
                name: { firstname: firstname, lastname: lastname } }, function (err) {
                console.log(err.message);
            });
        }
    }, {
        key: 'update',
        value: function update(id, username, password, email, age, gender, photoAlbum, firstname, lastname) {
            _userSchema.User.upate({ username: username, password: password, email: email, age: age, gender: gender, photoAlbum: photoAlbum,
                name: { firstname: firstname, lastname: lastname } }).where('id').eq(id);
        }
    }, {
        key: 'addAddress',
        value: function addAddress(street, city, state, country, email, phone) {}
    }, {
        key: 'updateAddr',
        value: function updateAddr(street, city, state, country, email, phone) {}
    }, {
        key: 'getMyAddressInRange',
        value: function getMyAddressInRange(min, max) {}
    }, {
        key: 'findUsersInRange',
        value: function findUsersInRange(min, max) {}
    }, {
        key: 'getAllMyFriends',
        value: function getAllMyFriends() {}
    }, {
        key: 'getMyFriendsInRange',
        value: function getMyFriendsInRange(min, max) {
            //will be used in pagination and  slicing

        }
    }, {
        key: 'addNewFoundFriend',
        value: function addNewFoundFriend(user_id) {}
    }, {
        key: 'isUserMyFriend',
        value: function isUserMyFriend(user_id) {}
    }, {
        key: 'getUserProfile',
        value: function getUserProfile() {}
    }, {
        key: 'updateUserProfile',
        value: function updateUserProfile() {}
    }, {
        key: 'getUserPhoto',
        value: function getUserPhoto() {}
        /*
         *small user profile user name, photo,and some feed additional info
         */

    }, {
        key: 'getUserInfo',
        value: function getUserInfo() {}
    }, {
        key: 'getAllMyProducts',
        value: function getAllMyProducts() {}
    }, {
        key: 'isMyProduct',
        value: function isMyProduct() {}
    }, {
        key: 'getMyProductsInRange',
        value: function getMyProductsInRange(min, max) {}
    }]);

    return userModel;
}();

//# sourceMappingURL=userModelJunk-compiled.js.map