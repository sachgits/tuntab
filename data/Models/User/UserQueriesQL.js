/**
 * Created by sachg on 3/19/2016.
 */

import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import UserType from './UserTypeQL';
import User from './userSchema';

export default {
    users: {
        type: new GraphQLList(UserType),
        resolve: User.getListOfUsers
    },
    user: {
        type: UserType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: User.getUserById
    }
};
