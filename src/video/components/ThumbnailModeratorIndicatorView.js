/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';


// TODO: add real functionality
const ThumbnailModeratorIndicatorView = () => {
    return (<span className="focusindicator" data-i18n="[data-content]videothumbnail.moderator" data-toggle="popover" data-placement="top" data-html="true" data-container="body" data-content="The owner of<br/>this conference">
        <i className="fa fa-star"></i>
    </span>)
};

export default ThumbnailModeratorIndicatorView;
