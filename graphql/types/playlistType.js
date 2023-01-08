const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');
const sampleType = require("./sampleType");


const playlistType = new GraphQLObjectType({
    name: 'Playlist',
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        samples: {
            type: new GraphQLList(sampleType),
            resolve: async (playlist) => {
                return playlist.getSamples();
            }
        },
    }
});

module.exports = playlistType;