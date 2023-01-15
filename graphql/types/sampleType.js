const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
} = require('graphql');
const noteType = require("./noteType");

const sampleType = new GraphQLObjectType({
    name: 'Sample',
    fields: () => {
        const playlistType = require("./playlistType");

        return ({
            id: {
                type: GraphQLID,
            },
            name: {
                type: GraphQLString,
            },
            totalTime: {
                type: GraphQLFloat,
            },
            likes: {
                type: GraphQLInt,
            },
            notes: {
                type: new GraphQLList(noteType),
                resolve: async (sample) => {
                    return sample.getNotes();
                }
            },
            playlists: {
                type: new GraphQLList(playlistType),
                resolve: async (sample) => {
                    return sample.getPlaylists();
                }
            },
        })
    }
});

module.exports = sampleType;