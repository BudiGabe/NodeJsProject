const {GraphQLList} = require("graphql");
const models = require("../../models");
const noteType = require("../types/noteType");

module.exports = {
    type: new GraphQLList(noteType),
    resolve: () => {
        return models.Note.findAll();
    }
}
