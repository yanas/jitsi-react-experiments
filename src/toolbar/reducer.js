import * as t from './actionTypes';

/**
 * Each toolbar button in the state has the following shape:
 *   id              {string}  - unique identifier (e.g. "toolbar_button_mute")
 *   buttonClassName {string}  - CSS classes for the default (un-toggled) state
 *   toggledClassName{string}  - CSS classes when the button is toggled on (optional)
 *   buttonShortcut  {string}  - keyboard shortcut popover key (optional)
 *   i18nTextKey     {string}  - i18n key used to set the button's accessible text
 *   tooltipText     {string}  - human-readable tooltip
 *   toggled         {boolean} - current toggle state; absence means non-toggleable
 *   disabled        {boolean} - whether the button is currently disabled (optional)
 *   unreadMessages  {number}  - unread count badge, used by the chat button (optional)
 */
const initialState = [
    {
        id: "toolbar_button_mute",
        buttonClassName: "button icon-microphone",
        toggledClassName: "button icon-mic-disabled",
        buttonShortcut: "mutePopover",
        i18nTextKey: "[content]toolbar.mute",
        tooltipText: "Mute / unmute",
        toggled: false
    },
    {
        id: "toolbar_button_camera",
        buttonClassName: "button icon-camera",
        toggledClassName: "button icon-camera-disabled",
        buttonShortcut: "toggleVideoPopover",
        i18nTextKey: "[content]toolbar.videomute",
        tooltipText: "Start / stop camera",
        toggled: false
    },
    {
        id: "toolbar_button_record",
        buttonClassName: "button fa fa-play-circle",
        i18nTextKey: "[content]liveStreaming.buttonTooltip",
        tooltipText: "Start / stop live streaming",
        disabled: true
    },
    {
        id: "toolbar_button_security",
        buttonClassName: "button icon-security",
        i18nTextKey: "[content]toolbar.lock",
        tooltipText: "Lock / unlock room"
    },
    {
        id: "toolbar_button_link",
        buttonClassName: "button icon-link",
        i18nTextKey: "[content]toolbar.invite",
        tooltipText: "Invite others"
    },
    {
        id: "toolbar_button_chat",
        buttonClassName: "button icon-chat",
        buttonShortcut: "toggleChatPopover",
        i18nTextKey: "[content]toolbar.chat",
        tooltipText: "Open / close chat",
        unreadMessages: 0
    },
    {
        id: "toolbar_button_desktopsharing",
        buttonClassName: "button icon-share-desktop",
        buttonShortcut: "toggleDesktopSharingPopover",
        i18nTextKey: "[content]toolbar.sharescreen",
        tooltipText: "Share screen"
    },
    {
        id: "toolbar_button_settings",
        buttonClassName: "button icon-settings",
        i18nTextKey: "[content]toolbar.Settings",
        tooltipText:"Settings"
    },
    {
        id: "toolbar_button_fullScreen",
        buttonClassName: "button icon-full-screen",
        i18nTextKey: "[content]toolbar.fullscreen",
        tooltipText: "Enter / Exit Full Screen"
    },
    {
        id: "toolbar_button_hangup",
        buttonClassName: "button icon-hangup",
        i18nTextKey: "[content]toolbar.hangup",
        tooltipText: "Hang Up"
    }
];

/**
 * Sub-reducer for a single toolbar button. On CLICK_BUTTON, toggles the
 * `toggled` flag if the action targets this button and the button supports
 * toggling (i.e. `toggled` is defined). Returns the button unchanged otherwise.
 *
 * @param {Object} toolbarButton - A single button entry from the state array.
 * @param {Object} action - The dispatched Redux action.
 * @returns {Object} The next state for this button.
 */
const toolbarButtonReducer = (toolbarButton, action) => {
    switch (action.type) {
        case t.CLICK_BUTTON:
            if (toolbarButton.id !== action.id) {
                return toolbarButton;
            }

            if (toolbarButton.toggled !== undefined)
                return Object.assign({}, toolbarButton, {
                    toggled: !toolbarButton.toggled
                });

            // Call the library.
        default:
            return toolbarButton;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.CLICK_BUTTON:
            return state.map(t =>
                    toolbarButtonReducer(t, action)
            )
        default:
            return state;
    }
}

export default reducer;