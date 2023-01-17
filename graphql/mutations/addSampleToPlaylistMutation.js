// const {
//     GraphQLNonNull,
//     GraphQLString
//   } = require("graphql");
//   const sampleType = require("../types/sampleType");
//   const playlistType =require("../types/playlistType");
//   const createSampleResolver = require('../resolvers/createSampleResolver');
//   const updatePlaylistResolver = require('../resolvers/updatePlaylistResolver');
// const { INTEGER } = require("sequelize");
  
//   module.exports = {
//     type: {sampleType,playlistType},
//     args: {
//       name: {
//         type: new GraphQLNonNull(GraphQLString),
//       },
//       totalTime: {
//         type: new GraphQLNonNull(GraphQLString),
//       },
//       likes: {
//         type: new INTEGER(0),
//       }
//     },
//     resolve: createSampleResolver,
//   }
  