const {GraphQLList} = require("graphql");
const models = require("../../models");
const playlistType = require("../types/playlistType");

module.exports = {
    type: new GraphQLList(playlistType),
    resolve: () => {
        return models.Playlist.findAll();
    }
}
