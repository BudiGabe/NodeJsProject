const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
} = require('graphql');


const noteType = new GraphQLObjectType({
    name: 'Note',
    fields: {
        id: {
            type: GraphQLID,
        },
        pitch: {
            type: GraphQLInt,
        },
        startTime: {
            type: GraphQLFloat,
        },
        endTime: {
            type: GraphQLFloat,
        }
    }
});

module.exports = noteType;