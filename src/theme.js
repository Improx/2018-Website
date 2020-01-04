// https://coolors.co/0b0a07-3f4045-5d737e-e4ff1a-fcfcfc
const colors = {
  yellow: "#E4FF1A",
  black: "#0B0A07",
  light: "#FCFCFC",
  grey: "#3F4045",
  bluegrey: "#5D737E",
  dark: "#000000"
};

const fonts = {
  primary: "Oswald, sans-serif",
  secondary: "Open Sans, sans-serif"
};

const SIZES = {
  xsmall: {
    min: 0,
    max: 599
  },
  small: {
    min: 600,
    max: 779
  },
  medium: {
    min: 780,
    max: 979
  },
  large: {
    min: 980,
    max: 1279
  },
  xlarge: {
    min: 1280,
    max: 1339
  },
  xxlarge: {
    min: 1340,
    max: Infinity
  }
};

const media = {
  between(smallKey, largeKey, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`;
      }
    }
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    } else if (size.max == null) {
      return media.greaterThan(key);
    } else {
      return media.between(key, key);
    }
  }
};

export { colors, fonts, SIZES, media };
