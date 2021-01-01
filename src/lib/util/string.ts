// String utility functions

/**
 * Remove dashes from a string.
 * @param {string} str string to remove dashes from
 * @returns {string} string with dashes removed
 */
export const removeDashes = (str: string): string => str.replace(/[-]/g, " ");

/**
 * Capitalize all words in a string.
 * @param {string} str string to capitalize
 * @returns {string} capitalized string
 */
export const capitalizeWords = (str: string): string =>
  str.replace(/\w\S*/g, (word: string) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });

/**
 * Uppercase acronyms from a list of values (regex).
 * @param {string} str input string to check for acronyms
 * @returns {string} string with acronym(s) uppercased
 */
export const uppercaseAcronyms = (str: string): string => {
  return str.replace(
    /Usdc|Usd|Sv|Xrp|Eos|Nem|Theta|Tron|Okb|Leo|Uma|Ftx|Renbtc|Btc|Nxm/gi,
    (matched) => {
      return matched.toUpperCase();
    },
  );
};

/**
 * Handle ".com" conversion (regex).
 * @param {string} str input string to check
 * @returns {string} string with conversion to ".com"
 */
export const handleDotCom = (str: string): string => {
  return str.replace(/( Com)/g, ".com");
};

/**
 * Format a cryptocurrency name.
 * @param {string} name name to format
 * @returns {string} formatted name
 */
export const formatName = (name: string): string =>
  handleDotCom(uppercaseAcronyms(capitalizeWords(removeDashes(name))));
