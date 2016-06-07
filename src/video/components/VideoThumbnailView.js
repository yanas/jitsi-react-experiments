/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';
import ThumbnailDisplayNameView from './ThumbnailDisplayNameView';
import ThumbnailAvatarView from './ThumbnailAvatarView';
import VideoElementView from './VideoElementView';
import AudioElementView from './AudioElementView';
import ThumbnailConnectionIndicatorView from './ThumbnailConnectionIndicatorView';
import ThumbnailModeratorIndicatorView from './ThumbnailModeratorIndicatorView';
import ThumbnailDominantSpeakerIndicatorView from './ThumbnailDominantSpeakerIndicatorView';
import ThumbnailMutedVideoIndicatorView from './ThumbnailMutedVideoIndicatorView';
import ThumbnailMutedAudioIndicatorView from './ThumbnailMutedAudioIndicatorView';

class VideoThumbnailView extends React.Component {
    render() {
        let props = this.props;

        return (
            <span className="videocontainer">
                <VideoElementView muted={props.muteVideoElement} stream={props.videoStream}/>

                <AudioElementView muted={props.muteAudioElement} stream={props.audioStream}/>

                <ThumbnailDisplayNameView name={props.displayName} isEditable={props.isDisplayNameEditable}/>

                {(!props.videoStream || props.isVideoMuted) &&
                    <ThumbnailAvatarView avatar={props.avatar}/>}

                <div>
                    {props.isModerator && <ThumbnailModeratorIndicatorView/>}
                    {props.isVideoMuted && <ThumbnailMutedVideoIndicatorView/>}
                    {props.isAudioMuted && <ThumbnailMutedAudioIndicatorView/>}
                    <ThumbnailConnectionIndicatorView/>
                    {props.isDominantSpeaker && <ThumbnailDominantSpeakerIndicatorView/>}
                </div>
            </span>
        );
    }
}

VideoThumbnailView.propTypes = {
    videoStream: React.PropTypes.object,
    audioStream: React.PropTypes.object,
    displayName: React.PropTypes.string,
    isDisplayNameEditable: React.PropTypes.bool,
    avatar: React.PropTypes.string,
    isModerator: React.PropTypes.bool,
    isVideoMuted: React.PropTypes.bool,
    isAudioMuted: React.PropTypes.bool,
    isDominantSpeaker: React.PropTypes.bool,
    muteVideoElement: React.PropTypes.bool,
    muteAudioElement: React.PropTypes.bool
};

export default VideoThumbnailView;
