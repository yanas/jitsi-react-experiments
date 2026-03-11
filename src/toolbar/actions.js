import * as t from './actionTypes';

/**
 * Creates an action to handle a toolbar button click.
 * @param {string} id - The id of the button that was clicked.
 */
export const clickButton = (id) => ({
    type: t.CLICK_BUTTON,
    id
});