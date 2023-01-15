const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');
const sampleType = require("./sampleType");
const playlistType = require("./playlistType");


const producerType = new GraphQLObjectType({
    name: 'Producer',
    fields: {
        id: {
            type: GraphQLID,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        samples: {
            type: new GraphQLList(sampleType),
            resolve: async (producer) => {
                return producer.getSamples();
            }
        },
        playlists: {
            type: new GraphQLList(playlistType),
            resolve: async (producer) => {
                return producer.getPlaylists();
            }
        },
    }
});

module.exports = producerType;