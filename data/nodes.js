/**
 * Created by sachg on 3/24/2016.
 */


import {
    nodeDefinitions,
    fromGlobalId
} from 'graphql-relay';


import User from './Models/User/userSchema';
import UserType from './Types/User';


var {nodeInterface, nodeField} = nodeDefinitions(
    (globalId) => {
        var {type, id} = fromGlobalId(globalId);
        console.log('globalId: ' + globalId + " id value: " + id + " and type value: " + type);
        if(type === 'User')
            return  User.getUserById(id);
        return 'null';
        //TODO: more to come here items feeds, login
    },
    (obj) => {
        console.log("obj is of type: " + obj);
        if (obj instanceof User)
            return UserType;

        return 'null';
        //TODO: more to come here items feeds, login
    }
);

export {nodeInterface, nodeField};