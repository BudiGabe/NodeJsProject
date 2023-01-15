'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Sample belongsToMany Note
    return queryInterface.createTable(
        'SampleNote',
        {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          SampleId: {
            type: Sequelize.UUID,
            primaryKey: true,
          },
          NoteId: {
            type: Sequelize.UUID,
            primaryKey: true,
          },
        }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('SampleNotes');
  }
};
