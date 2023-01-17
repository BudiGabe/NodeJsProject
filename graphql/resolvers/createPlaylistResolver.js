const models = require("../../models");
module.exports = async (source, { name}, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.Playlist.create({
    name,
  });

  return user;
}