'use strict';

const models = require('../models');
const {TWINKLE_TWINKLE, JUMP_SONG} = require("../utils/simple-songs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Samples', [
            {
                name: TWINKLE_TWINKLE.name,
                totalTime: 8,
                likes: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: JUMP_SONG.name,
                totalTime: 8,
                likes: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ])

        const notes = await models.Note.findAll();
        let mockTwinkle = [];
        for (let i = 0; i < TWINKLE_TWINKLE.notes.length; i++) {
            mockTwinkle.push({
                SampleId: 1,
                NoteId: notes[i].id,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        }
        await queryInterface.bulkInsert('SampleNote', mockTwinkle, {});

        let mockJump = [];
        for (let i = TWINKLE_TWINKLE.notes.length; i < notes.length; i++) {
            mockJump.push({
                NoteId: notes[i].id,
                SampleId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        await queryInterface.bulkInsert('SampleNote', mockJump, {});
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
