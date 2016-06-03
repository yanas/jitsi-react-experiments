import React from 'react';
import { render } from 'react-dom';
import video from './video';
import toolbar from './toolbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import jitsiReducer from './jitsiReducer'
import * as videoActions from './video/actions';

let store = createStore(jitsiReducer, {},
    window.devToolsExtension && window.devToolsExtension()
);

class App extends React.Component {
    render () {
        return <div>
            <toolbar.ui.ToolbarContainer></toolbar.ui.ToolbarContainer>
            <video.ui.LocalVideoView></video.ui.LocalVideoView>

            <button onClick={() => {
                navigator.webkitGetUserMedia({ audio: true, video: true }, (stream) => {
                    let audioStream = new webkitMediaStream();
                    let videoStream = new webkitMediaStream();

                    var audioTracks = stream.getAudioTracks();
                    if (audioTracks.length) {
                        for (var i = 0; i < audioTracks.length; i++) {
                            audioStream.addTrack(audioTracks[i]);
                        }
                    }

                    var videoTracks = stream.getVideoTracks();
                    if (videoTracks.length) {
                        for (var j = 0; j < videoTracks.length; j++) {
                            videoStream.addTrack(videoTracks[j]);
                        }
                    }
                    
                    store.dispatch(videoActions.setLocalAudioStream(audioStream));
                    store.dispatch(videoActions.setLocalVideoStream(videoStream));
                }, () => {});
            }}>Set local video and audio streams</button>
        </div>;
    }
}

render( <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app'));