import * as videoActionTypes from './actionTypes';
import { combineReducers } from 'redux';

const localVideoReducer = (state = {}, action) => {
    switch (action.type) {
        case videoActionTypes.SET_LOCAL_AUDIO_STREAM:
            return Object.assign(
                {}, state, { audioStream: action.audioStream });
        case videoActionTypes.SET_LOCAL_VIDEO_STREAM:
            return Object.assign(
                {}, state, { videoStream: action.videoStream });
        default:
            return state;
    }
};

const reducer = combineReducers({
    local: localVideoReducer
});

export default reducer;