const express = require("express");
const app = express();
const mainConfig = require("./config/main_config.js");
const routeConfig = require("./config/router_config.js");

mainConfig.init();
routeConfig.init(app);

module.exports = app;