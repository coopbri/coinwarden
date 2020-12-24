interface Theme {
  /** Colors object */
  colors: { [key: string]: string };
}

/**
 * Global application theme.
 */
const theme: Theme = {
  colors: {
    primary: "#f5ad42",
    secondary: "#f5d442",
    background: "#423f42",
  },
};

export default theme;
