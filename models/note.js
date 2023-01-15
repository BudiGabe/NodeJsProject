'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Note.belongsToMany(models.Sample, {
        through: 'SampleNote',
      });
    }
  }
  Note.init({
    pitch: DataTypes.INTEGER,
    startTime: DataTypes.FLOAT,
    endTime: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};