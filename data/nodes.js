/**
 * Created by sachg on 3/24/2016.
 */

import User from './Models/User/userSchema'
import UserType from './Types/User'

import {idFetcher, typeResolver} from './registry';

import {GraphQLObjectType} from 'graphql';

import {
nodeDefinitions, fromGlobalId
} from 'graphql-relay'



var {nodeInterface, nodeField} = nodeDefinitions(
    (globalId) => {
        var {type, id} = fromGlobalId(globalId);
        if(type === 'User')
            return  User.getUserById(id);
        console.log('about to hit null from globalid');
        return 'null';
        //TODO: more to come here items feeds, login
    },
    (obj) => {
        if (obj instanceof User)
            return UserType;
        console.log('about to hit null from obj');
        return 'null';
        //TODO: more to come here items feeds, login
    }
);

export {nodeInterface, nodeField};