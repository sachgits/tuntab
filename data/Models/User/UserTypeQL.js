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

export default new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        age: {
            type: GraphQLInt
        },
        username:{
            type: GraphQLString
        },
        email:{
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        timeCreated: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLBoolean
        },
        photoAlbum: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    })
});
