'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sample extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Sample.belongsToMany(models.Playlist, {
                through: 'PlaylistSample',
            });
            models.Sample.belongsToMany(models.Note, {
                through: 'SampleNote',
            });
            models.Sample.belongsTo(models.Producer)
        }
    }

    Sample.init({
        name: DataTypes.STRING,
        totalTime: DataTypes.FLOAT,
        likes: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Sample',
    });
    return Sample;
};