const models = require("../../models");
module.exports = (source, { id }) => {
  return models.Playlist.destroy({
    where: {
      id,
    }
  })
}
