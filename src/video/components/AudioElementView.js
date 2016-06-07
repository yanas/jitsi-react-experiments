/**
 * Created by tsareg on 03.06.16.
 */

import React from 'react';

// TODO: add real functionality
class AudioElementView extends React.Component {
    render() {
        // TODO: use URL.releaseObjectURL on componentDid/WillUnmount
        let src = this.props.stream
            ? URL.createObjectURL(this.props.stream)
            : '';

        return (
            <audio autoPlay
                muted={this.props.muted}
                src={src}
            ></audio>
        );
    }
}

AudioElementView.propTypes = {
    stream: React.PropTypes.object,
    muted: React.PropTypes.bool
};

export default AudioElementView;
