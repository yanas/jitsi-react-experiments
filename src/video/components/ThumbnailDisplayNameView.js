/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';

// TODO: add real functionality
const ThumbnailDisplayNameView = (props) => {
    return (
        <span className="displayname" style={{display:'inline-block'}}>
            {props.name}
        </span>)
};

export default ThumbnailDisplayNameView;
