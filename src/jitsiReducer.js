/**
 * Created by ystamcheva on 18/05/2016.
 */
import { combineReducers } from 'redux';
import toolbar from './toolbar';
import video from './video';

var toolbarReducer = toolbar.reducer;
var videoReducer = video.reducer;

const jitsiReducer = combineReducers({
    toolbar: toolbarReducer,
    video: videoReducer
});

export default jitsiReducer;