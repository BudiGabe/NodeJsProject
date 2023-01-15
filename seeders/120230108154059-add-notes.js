'use strict';

const {TWINKLE_TWINKLE, JUMP_SONG} = require("../utils/simple-songs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let mockNotes = TWINKLE_TWINKLE.notes;
        mockNotes = mockNotes.concat(JUMP_SONG.notes);
        mockNotes = mockNotes.map(note => ({
            ...note,
            createdAt: new Date(),
            updatedAt: new Date(),
        }))
        await queryInterface.bulkInsert('Notes', mockNotes, {});
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
