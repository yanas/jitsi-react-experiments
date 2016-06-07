import * as t from './actionTypes';

export const setLocalAudioStream = (audioStream) => ({
    type: t.SET_LOCAL_AUDIO_STREAM,
    audioStream
});

export const setLocalVideoStream = (videoStream) => ({
    type: t.SET_LOCAL_VIDEO_STREAM,
    videoStream
});
