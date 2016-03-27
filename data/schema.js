/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';


import mongoose from 'mongoose';

//import {nodeField } from './nodes';

import User from './Models/User/userSchema';
//more imports comming

import UserType, {nodeField} from './Types/User';

//more Query imports comming soon //here


/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({

      User: {
          type: UserType,
          resolve: ()=> {
              //for(var i = 0; i < 1; i++)
                  //User.createNewFakeUsers();

              var results = User.getUserById('56f87b2231d93f3c08054c88');
              return results;
          }
      },
      // Add your own root fields here
      node: nodeField
  })
  });




/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
  query: queryType,
  // Uncomment the following after adding some mutation fields:
  // mutation: mutationType
});
