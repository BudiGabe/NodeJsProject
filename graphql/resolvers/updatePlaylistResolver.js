const models = require("../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    name,
  } = args;
  if(!tokenPayload) {
    return null;
  }

  await models.Playlist.update({
    name,
  }, {
    where: {
      id,
    }
  });

  return models.Playlist.findByPk(id);
}
