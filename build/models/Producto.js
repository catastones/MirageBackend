"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productoSchema = new _mongoose.Schema({
  categoria: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Categoria"
  }],
  modelo: {
    type: String,
    require: true
  },
  marca: {
    type: String,
    require: true,
    index: {
      unique: true
    }
  },
  descripcion: {
    type: Object,
    require: true
  },
  stock: {
    type: Number,
    require: true
  },
  precio: {
    type: Number,
    require: true
  },
  url_image: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)("Producto", productoSchema);