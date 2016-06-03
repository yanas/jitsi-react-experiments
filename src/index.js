import React from 'react';
import { render } from 'react-dom';
import video from './video';
import toolbar from './toolbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import jitsiReducer from './jitsiReducer'

let store = createStore(jitsiReducer, {},
    window.devToolsExtension && window.devToolsExtension()
);

class App extends React.Component {
    render () {
        return <div>
            <toolbar.ui.ToolbarContainer></toolbar.ui.ToolbarContainer>
            <video.ui.LocalVideoView></video.ui.LocalVideoView>
            <video.ui.RemoteVideoView></video.ui.RemoteVideoView>
        </div>;
    }
}

render( <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app'));