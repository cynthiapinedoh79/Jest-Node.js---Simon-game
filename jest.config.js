const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
    TestEnvironment: "jsdom", // required since Jest 28+
};