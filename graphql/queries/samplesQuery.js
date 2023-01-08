const {GraphQLList} = require("graphql");
const models = require("../../models");
const sampleType = require("../types/sampleType");

module.exports = {
    type: new GraphQLList(sampleType),
    resolve: () => {
        return models.Sample.findAll();
    }
}
