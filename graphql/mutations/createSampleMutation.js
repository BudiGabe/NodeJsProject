const {
    GraphQLNonNull,
    GraphQLString
  } = require("graphql");
  const sampleType = require("../types/sampleType");
  const createSampleResolver = require('../resolvers/createSampleResolver');
const { INTEGER } = require("sequelize");
  
  module.exports = {
    type: sampleType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      totalTime: {
        type: new GraphQLNonNull(GraphQLString),
      },
      likes: {
        type: new INTEGER(0),
      }
    },
    resolve: createSampleResolver,
  }
  