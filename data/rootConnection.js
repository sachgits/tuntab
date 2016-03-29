/**
 * Created by sachg on 3/30/2016.
 */

import {connectionDefinitions,
    connectionArgs,
    connectionFromPromisedArray,
connectionFromArray
} from 'graphql-relay';
import User  from './Models/User/userSchema';

function UsersConnection(name, connType) {
    var {connectionType} = connectionDefinitions({
        name: name,
        nodeType: connType
    });
    return {
        type: connectionType,
        args: connectionArgs,
        resolve: (_, args) => {
            var promiseResults = User.getListOfUsers();
            console.log("connection results: " + promiseResults);
            return connectionFromPromisedArray(promiseResults, args)
        }
};
}

module.exports = UsersConnection;