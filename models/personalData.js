'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PersonalData extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.PersonalData.hasOne(models.Producer);
        }
    }

    PersonalData.init({
        age: DataTypes.INTEGER,
        sex: DataTypes.STRING,
        nationality: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PersonalData',
    });
    return PersonalData;
};