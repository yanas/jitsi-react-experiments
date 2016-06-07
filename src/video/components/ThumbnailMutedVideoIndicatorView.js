/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';

// TODO: add real functionality
const ThumbnailMutedVideoIndicatorView = () => {
    return (<span className="videoMuted">
        <i className="icon-camera-disabled" data-i18n="[data-content]videothumbnail.videomute" data-toggle="popover" data-placement="top" data-html="true" data-container="body" data-content="Participant has<br/>stopped the camera."></i>
    </span>);
};

export default ThumbnailMutedVideoIndicatorView;