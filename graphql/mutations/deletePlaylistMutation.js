const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
  } = require("graphql");
  
  const deletePlaylistResolver = require('../resolvers/deletePlaylistResolver');
  
  module.exports = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deletePlaylistResolver,
  };
  