/**
 * Created by sachg on 3/21/2016.
 */
/*
here will have all mechanism GlobalID transaltion
from types to ids
 */

import type,{
GraphQLObjectType
} from 'graphql';

import {
nodeDefinitions,
fromGlobalId
}from 'graphql-relay';

import User from './Models/User/userSchema';

var  UserType = require('./Types/User');



var {nodeInterface, nodeField} = nodeDefinitions(
    (globalId)=> {
        var {type,id} = fromGlobalId(globalId);
        if(type instanceof User)//TODO: other instances
            return  User.getUserById(id);
        return null;
    },
    (obj) => {
        return UserType;
    }
);

export {nodeInterface,nodeField};