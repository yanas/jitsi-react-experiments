/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';


// TODO: add real functionality
const ThumbnailMutedAudioIndicatorView = () => {
    return (<span className="audioMuted" data-i18n="[data-content]videothumbnail.mute" data-toggle="popover" data-placement="top" data-html="true" data-container="body" data-content="Participant is muted">
        <i className="icon-mic-disabled"></i>
    </span>)
};

export default ThumbnailMutedAudioIndicatorView;
