const colors = {
    yellow: '#F4A236',
    black: '#2D2D2D',
    light: '#E2E2E2',
    grey: '#595959',
    dark: '#000000',
};

const SIZES = {
    xsmall: {
        min: 0,
        max: 599,
    },
    small: {
        min: 600,
        max: 779,
    },
    medium: {
        min: 780,
        max: 979,
    },
    large: {
        min: 980,
        max: 1279,
    },
    xlarge: {
        min: 1280,
        max: 1339,
    },
    xxlarge: {
        min: 1340,
        max: Infinity,
    },
};

const media = {
    between(smallKey, largeKey, excludeLarge = false) {
        if (excludeLarge) {
            return `@media (min-width: ${SIZES[smallKey]
    .min}px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
        } else {
            if (SIZES[largeKey].max === Infinity) {
                return `@media (min-width: ${SIZES[smallKey].min}px)`;
            } else {
                return `@media (min-width: ${SIZES[smallKey]
    .min}px) and (max-width: ${SIZES[largeKey].max}px)`;
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
    },
};

export {colors, media};
