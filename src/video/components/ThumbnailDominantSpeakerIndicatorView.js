/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';


// TODO: add real functionality
const ThumbnailDominantSpeakerIndicatorView = () => {
    return (<span className="dominantspeakerindicator" data-i18n="[data-content]speaker" data-toggle="popover" data-placement="left" data-html="true" data-container="body" data-content="Speaker">
        <i id="speakerindicatoricon" className="fa fa-bullhorn"></i>
    </span>)
};

export default ThumbnailDominantSpeakerIndicatorView;
