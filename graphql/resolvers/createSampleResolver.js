const models = require("../../models");
const {combine_sample} = require("../../utils/magenta-service");
module.exports = async (source, { tokenPayload }) => {
    if(!tokenPayload) {
        return null;
    }

    const samples = await models.Sample.findAll();
    const randInt1 = Math.floor(Math.random() * samples.length) + 1;
    const randInt2 = Math.floor(Math.random() * samples.length) + 1;
    const sample1 = samples[randInt1];
    const sample2 = samples[randInt2];

    let newSample = await combine_sample(sample1, sample2);
    const notes = newSample.notes;
    const totalTime = newSample.totalTime;

    const sample = await models.Sample.create({
        newSample,
    });

    return user;
}
