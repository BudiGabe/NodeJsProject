'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Playlist extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Playlist.belongsToMany(models.Sample, {
                through: "PlaylistSample",
            });
            models.Playlist.belongsTo(models.Producer)
        }
    }

    Playlist.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Playlist',
    });
    return Playlist;
};