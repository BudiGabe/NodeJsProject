'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Producers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addColumn(
        'Samples',
        'producerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Producers',
            },
            key: 'id'
          },
        }
    );
    await queryInterface.addColumn(
        'Playlists',
        'producerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Producers',
            },
            key: 'id'
          },
        }
    );
    await queryInterface.addColumn(
      'PersonalData',
      'producerId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Producers',
          },
          key: 'id'
        },
      }
  );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Producers');
  }
};