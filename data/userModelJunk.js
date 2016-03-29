/**
 * Created by sachg on 2/22/2016.
 */
import {mongoose} from './dbConfig';
import {User} from './Models/User/userSchema';


class userModel {

    User;
    constructor(){
        user = new User();
    }
    login(username,password){
        //TODO: password must be hashed
        user.find({username:username,password:password});
    }
    create(username,password,email,age,gender,photoAlbum,firstname,lastname){
        User.create({username:username,password:password,email:email,age:age,gender:gender,photoAlbum:photoAlbum,
            name:{firstname:firstname,lastname:lastname}},function(err){
            console.log(err.message);
        });
    }
    update(id,username,password,email,age,gender,photoAlbum,firstname,lastname){
        User.upate({username:username,password:password,email:email,age:age,gender:gender,photoAlbum:photoAlbum,
            name:{firstname:firstname,lastname:lastname}}).where('id').eq(id);
    }
    addAddress(street, city,state,country,email,phone){

    }
    updateAddr(street,city,state,country,email,phone){

    }

    getMyAddressInRange(min,max){

    }

    findUsersInRange(min,max){

    }
    getAllMyFriends(){

    }
    getMyFriendsInRange(min,max){
        //will be used in pagination and  slicing

    }
    addNewFoundFriend(user_id){

    }
    isUserMyFriend(user_id){

    }

    getUserProfile(){

    }
    updateUserProfile(){

    }
    getUserPhoto(){

    }
    /*
     *small user profile user name, photo,and some feed additional info
     */
    getUserInfo(){

    }

    getAllMyProducts(){

    }
    isMyProduct(){

    }
    getMyProductsInRange(min,max){

    }

}