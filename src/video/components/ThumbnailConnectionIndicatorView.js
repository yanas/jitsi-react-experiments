/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';

// TODO: add real functionality
const ThumbnailConnectionIndicatorView = () => {
    return (<div className="connectionindicator">
        <span className="connection connection_empty"><i className="icon-connection"></i></span>
        <span className="connection connection_full"><i className="icon-connection"></i></span>
    </div>);
};

export default ThumbnailConnectionIndicatorView;
