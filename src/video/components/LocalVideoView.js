import React from 'react';
import VideoThumbnailView from './VideoThumbnailView';
import { connect } from 'react-redux';

class LocalVideoView extends React.Component {
    render () {
        let localVideo = this.props.local;

        return (
            <VideoThumbnailView
                audioStream={localVideo.audioStream}
                videoStream={localVideo.videoStream}
                muteVideoElement={false}
                muteAudioElement={false}
                isModerator={true}
                isDominantSpeaker={true}
                isVideoMuted={true}
                isAudioMuted={true}
                isModerator={true}
                displayName="test"
            ></VideoThumbnailView>
        );
    }
}

const mapStateToProps = (state) => {
    return { local: state.video.local }
};

export default connect(mapStateToProps)(LocalVideoView);