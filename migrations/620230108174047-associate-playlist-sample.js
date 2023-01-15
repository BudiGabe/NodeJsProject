'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Playlist belongsToMany Sample
    return queryInterface.createTable(
        'PlaylistSample',
        {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          PlaylistId: {
            type: Sequelize.UUID,
            primaryKey: true,
          },
          SampleId: {
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
