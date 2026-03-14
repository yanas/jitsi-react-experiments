import * as t from './actionTypes';

/**
 * Creates a Redux action to handle a toolbar button click.
 * @param {string} id - The id of the button that was clicked.
 * @returns {{type: string, id: string}} A CLICK_BUTTON action object.
 */
export const clickButton = (id) => ({
    type: t.CLICK_BUTTON,
    id
});