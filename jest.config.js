/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    verbose: true,

    preset: "ts-jest/presets/default-esm",
    testEnvironment: "miniflare",
    testEnvironmentOptions: {
      // See https://miniflare.dev/get-started/api#reference for API reference
      // and the rest of the docs for more detailed information
      kvNamespaces: ["MYSTORE"],
    },

    globals: {
        "ts-jest": {
            tsconfig: "test/tsconfig.json",
            useESM: true,
        }
    },
};
