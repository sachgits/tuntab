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

import User from './Models/User/userSchema';
//more imports comming

import {
  // Import methods that your schema can use to interact with your database
Person
} from './database';

import {mongoose} from './dbConfig';

import Users from './userSchema';


/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      user = new Person(id);
        return user;
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else {
      return null;
    }
  }
);


import UserType from './Types/User';


import {
UserQueries,
UserMutations,
}from './Models/User/UserQL';

//more Query imports comming soon //here


var UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who has already joined us',
  isTypeOf: object => object instanceof User,
  fields: () => ({
    graph_id: globalIdField('user'),
    age: {type: GraphQLInt, resolve(person) { return person.User.age}},
    username:{type: GraphQLString, resolve(person){ return person.User.username}},
    email: {type: GraphQLString, resolve(person){return person.User.email}},
    password:{type: GraphQLString, resolve(person){return person.User.password}},//just for now these should not be sent to user
    gender: {type: GraphQLBoolean, resolve(person){return person.User.gender}},
    firstName: {type: GraphQLString,resolve(person){return person.User.name.firstName }},
    lastName: {type: GraphQLString,resolve(person){return person.User.name.lastName }},
    lastLogin: {type: GraphQLString, resolve(person){return person.User.lastLogin}},
    timeCreated:{type: GraphQLString, resolve(person){return person.User.timeCreated}},
    id: {type: GraphQLInt, resolve(person){return person.User.id}},
    photoAlbum: {type: GraphQLString, resolve(person){return person.User.photoAlbum}}
    //all the remaining are connections
    /*products: {
      type: productsConnection,
      description: 'A person\'s collection of widgets',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getWidgets(), args),
    },*/
  })//node interface comming soon
});

/*
var widgetType = new GraphQLObjectType({
  name: 'Widget',
  description: 'A shiny widget',
  fields: () => ({
    id: globalIdField('Widget'),
    name: {
      type: GraphQLString,
      description: 'The name of the widget',
    },
  }),
  interfaces: [nodeInterface],
});
*/

/**
 * Define your own connection types here

var {connectionType: widgetConnection} =
  connectionDefinitions({name: 'Widget', nodeType: widgetType});
*/


/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({

    User: {
      type: UserType,
      resolve: ()=>{
        var results = User.getUserById('User', 'Alize76');
          return results;
      }
    },
  }),

    node: nodeField,
    // Add your own root fields here
    Users: {
      type: GraphQLList(UserType),
      resolve(){
          return Users.getListOfUsers();
      }
    }
  });

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
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
