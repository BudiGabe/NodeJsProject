const {
    GraphQLObjectType,
} = require('graphql');

const studentsQuery = require('./queries/studentsQuery');
const studentQuery = require('./queries/studentQuery');
const groupQuery = require('./queries/groupQuery');
const playlistsQuery = require('./queries/playlistsQuery');
const samplesQuery = require('./queries/samplesQuery');
const producersQuery = require('./queries/producersQuery');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        students: studentsQuery,
        student: studentQuery,
        group: groupQuery,
        samples: samplesQuery,
        playlists: playlistsQuery,
        producers: producersQuery,
    }
});

module.exports = queryType;
