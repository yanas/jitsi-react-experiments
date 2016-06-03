/**
 * Created by ystamcheva on 18/05/2016.
 */
import React from 'react';

import ToolbarButtonView from './ToolbarButtonView';
import { connect } from 'react-redux';
import * as actions from '../actions';

require('./ToolbarContainerView.less');

class ToolbarContainerView extends React.Component {

    render () {
        var toolbar = this.props.toolbar;

        return (<span className="toolbar">{toolbar.map((toolbarButton) => {
                let className = (toolbarButton.toggled)
                    ? toolbarButton.toggledClassName
                    : toolbarButton.buttonClassName;

                return <ToolbarButtonView
                    key={toolbarButton.id}
                    id={toolbarButton.id}
                    buttonClassName={className}
                    buttonShortcut={toolbarButton.shortcut}
                    i18nTextKey={toolbarButton.i18nTextKey}
                    tooltipText={toolbarButton.tooltipText}
                    toggled={toolbarButton.toggled}
                    //{...toolbarButton}
                    onClick={() => this.props.onToolbarClick(toolbarButton.id)}
                    />
            }
        )}</span>);
    }
}

const mapStateToProps = (state) => {
    return { toolbar: state.toolbar.filter(button => !button.disabled) }
}

const mapDispatchToProps = (dispatch) => {
    return { onToolbarClick: (id) => {
        dispatch(actions.clickButton(id))}
    }
}

const ToolbarContainer
    = connect(mapStateToProps, mapDispatchToProps)(ToolbarContainerView);

export default ToolbarContainer;
