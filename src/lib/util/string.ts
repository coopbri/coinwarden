// String utility functions

/**
 * Remove dashes from a string.
 * @param {string} str string to remove dashes from
 * @returns {string} string with dashes removed
 */
export const removeDashes = (str: string): string => str.replace(/[-]/g, " ");

/**
 * Capitalize a string.
 * @param {string} str string to capitalize
 * @returns {string} capitalized string
 */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
