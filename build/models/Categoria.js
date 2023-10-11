"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
//Coleccion para clsicar los productos : "smartphone", "notebook" 

var categoriaSchema = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Categoria', categoriaSchema);