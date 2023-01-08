import * as mm from '@magenta/music'

let music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2');
let Player = new mm.Player();
music_vae.initialize();

function combine_sample(sample1, sample2) {
    const similarity = Math.floor(Math.random() * 7) + 3
    const numInterpolations = 11;
    const track1 = mm.sequences.quantizeNoteSequence(sample1, 4);
    const track2 = mm.sequences.quantizeNoteSequence(sample2, 4);

    let interpolatedMelodies =
        music_vae.interpolate([track1, track2], numInterpolations)
            .then((samples) => {
                return mm.sequences.unquantizeSequence(samples[similarity]);
            });
    return interpolatedMelodies;
}

function play_sample(sample) {
    if (Player.isPlaying()) {
        Player.stop()
    } else {
        Player.start(sample);
    }
}

function download_sample(sample) {

    const sample1 = mm.sequences.quantizeNoteSequence(sample, 4);
    sample1.notes.forEach(n => n.velocity = 80)
    const midi = mm.sequenceProtoToMidi(sample1);
    const file = new Blob([midi], {type: 'audio/midi'});

    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = 'interp.mid';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

export {combine_sample, play_sample, download_sample}