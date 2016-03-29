/**
 * Created by sachg on 3/21/2016.
 */
import {
GraphQLBoolean,
GraphQLEnumType,
GraphQLError,
GraphQLFloat,
GraphQLID,
GraphQLInt,
GraphQLInterfaceType,
GraphQLList,
GraphQLString,
GraphQLObjectType
} from 'graphql'

import {globalIdField} from 'graphql-relay';

import {nodeInterface} from '../nodes';
import User from '../Models/User/userSchema';

var UserType =  new GraphQLObjectType({
    name: 'User',
    description: 'A Character within tuntab ecosystem',
    isTypeOf: (user) => {
        return user instanceof User;},
    fields: ()=> ({

        age:{
            type: GraphQLInt,
            description: "age of the user",
            resolve: (user)=> user.age
        },
        gender:{
            type: GraphQLString,
            description: "User gender MALE or FEMALE",
            resolve: (user)=> {
                return (user.gender)?'MALE':'FEMALE';
            }
        },
        username:{
            type:GraphQLString,
            description: "Users unique name used for sign in",
            resolve: (user)=> user.username
        },
        email: {
            type:GraphQLString,
            description: "User Email",
            resolve: (user) => user.email
        },
        password: {
            type:GraphQLString,
            description: "User password for authentication not sure if its a good thing to sent to the user",
            resolve: (user) => user.password
        },
        timeCreated: {
            type: GraphQLString,
            description: "Time when user joined tuntab",
            resolve: (user) => user.timeCreated
        },
        lastLogin: {
            type: GraphQLString,
            description: "Last time when user was seen",
            resolve: (user) => user.lastLogin
        },
        firstname: {
            type: GraphQLString,
            description: "users first name",
            resolve: (user) => user.name.firstname
        },
        lastname: {
            type: GraphQLString,
            description: "users last name",
            resolve: (user) => user.name.lastname
        },
        photoAlbum: {
            type: GraphQLString,
            description: "users profile photo folder path might use cdn later",
            resolve: (user) => user.photoAlbum
        },
        _id: {
            type:GraphQLString,
            description: "user id on mongoDB",
            resolve: (user) => user._id
        },
        //more to come on here later especially connections
        //TODO: not well polished
        id: globalIdField('User'),
    }),
    interfaces: [nodeInterface]
});

export default UserType;
