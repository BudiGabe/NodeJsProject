'use strict';

const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Playlists', [
            {
                name: "PlaylistEmpty",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "PlaylistTest",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ])

        const samples = await models.Sample.findAll();
        for(let i = 0; i < samples.length; i++) {
            await queryInterface.bulkInsert('PlaylistSample', [
                {
                    sampleId: samples[i].id,
                    playlistId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ]);
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
