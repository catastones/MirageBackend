"use strict";

var _app = _interopRequireDefault(require("./app"));
var _process$env$PORT;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 8080;
_app["default"].listen(port, function () {
  console.log("App listening on port ".concat(port));
});