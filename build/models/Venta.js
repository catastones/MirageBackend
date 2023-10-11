"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var ventaSchema = new _mongoose.Schema({
  cliente: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  items: {
    type: Array,
    require: true
    /**
     * [
     * detalles producto
     * cantidad de unidades
     * precio unitario
     * ]
     */
  },

  monto_total: {
    type: Number,
    require: true
  },
  pyment: {
    type: Object,
    require: true
    //tipo de pago: credito/debito/efectivo/mercadopago/trensferencia
    //pagado: true/false
    //producto entregado: true/false
    //fecha_pago: date
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)("Venta", ventaSchema);