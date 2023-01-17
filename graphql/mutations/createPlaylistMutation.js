const {
    GraphQLNonNull,
    GraphQLString
  } = require("graphql");
  const playlistType = require("../types/playlistType");
  const createStudentResolver = require('../resolvers/createPlaylistResolver');
  
  module.exports = {
    type: playlistType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: createPlaylistResolver,
  }
  