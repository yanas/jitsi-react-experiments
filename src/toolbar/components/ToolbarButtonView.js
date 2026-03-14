/**
 * Created by ystamcheva on 1/06/2016.
 */

import React from 'react';

class ToolbarButtonView extends React.Component {
    render () {
        const { unreadMessages } = this.props;

        return <a className={this.props.buttonClassName}
                  id={this.props.id}
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                  shortcut={this.props.buttonShortcut}
                  data-i18n={this.props.i18nTextKey}
                  content={this.props.tooltipText}
                  onClick={this.props.onClick}>
            { unreadMessages > 0 &&
                <span className="badge">{unreadMessages}</span>
            }
        </a>;
    }
}

export default ToolbarButtonView;