const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');

const playlistType = new GraphQLObjectType({
    name: 'Playlist',
    fields: () => {
        const sampleType = require("./sampleType");

        return ({
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
        })

    }
});

module.exports = playlistType;