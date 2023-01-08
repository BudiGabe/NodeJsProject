const {GraphQLList} = require("graphql");
const models = require("../../models");
const producerType = require("../types/producerType");

module.exports = {
    type: new GraphQLList(producerType),
    resolve: () => {
        return models.Producer.findAll();
    }
}
