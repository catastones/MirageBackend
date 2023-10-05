"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cors = require('cors');
var app = (0, _express["default"])();
app.use(cors({
  origin: "*"
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    "name": _package["default"].name,
    "version": _package["default"].version,
    "description": _package["default"].description,
    "author": _package["default"].author
  });
});
var _default = exports["default"] = app;