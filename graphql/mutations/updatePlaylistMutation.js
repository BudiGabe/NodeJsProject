const {
  GraphQLNonNull,
  GraphQLString, GraphQLID, GraphQLInt
} = require("graphql");
const playlistType = require("../types/playlistType");
const updatePlaylistResolver = require('../resolvers/updatePlaylistResolver');

module.exports = {
  type: playlistType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
  },
  resolve: updatePlaylistResolver,
}
