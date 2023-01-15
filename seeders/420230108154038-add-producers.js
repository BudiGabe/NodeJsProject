'use strict';
const {
  randFirstName,
  randLastName,
  randEmail
} = require('@ngneat/falso');
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mockProducers = [];

    for(let i = 0; i < 100; i++) {
      mockProducers.push({
        firstName: randFirstName(),
        lastName: randLastName(),
        email: randEmail(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Producers', mockProducers, {});

    const samples = await models.Sample.findAll();
    const playlists = await models.Playlist.findAll();

    for (const sample of samples) {
      await queryInterface.bulkUpdate('Samples', {
        producerId: 1,
      }, {
        id: sample.id
      });
    }

    for (const playlist of playlists) {
      await queryInterface.bulkUpdate('Playlists', {
        producerId: 1,
      }, {
        id: playlist.id,
      });
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
