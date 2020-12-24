// Number utility functions

/**
 * Format a price number to two decimals with commas added. Converts the input
 * number to a string in the process.
 * @param {number} str number to format
 * @returns {string} string with decimals and commas added
 */
export const formatPrice = (num: number): string =>
  num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
