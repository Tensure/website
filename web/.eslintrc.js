module.exports = {
  extends: ["standard", "standard-react", "plugin:import/errors", "plugin:import/warnings"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "react/prop-types": 0,
    "object-curly-spacing": ["error", "never"],
    indent: 0,
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4",
    },
  },
};
