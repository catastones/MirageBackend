"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RolesSistem = void 0;
var _mongoose = require("mongoose");
var RolesSistem = exports.RolesSistem = ['user', 'admin', 'client'];
var RoleSchema = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Roles', RoleSchema);