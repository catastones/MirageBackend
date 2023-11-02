"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var ventasCtrl = _interopRequireWildcard(require("../controller/ventas.controller"));
var authJWT = _interopRequireWildcard(require("../middlewares/authJWT"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.post('/', [authJWT.verifyToken, authJWT.isAdminOrClient], ventasCtrl.newVenta);
router.get('/', [authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.listVenta);
router.get('/:ventaId', [authJWT.verifyToken, authJWT.isAdminOrClient], ventasCtrl.getVentaById);
router.get('/bybuyer/:buyerId', [authJWT.verifyToken, authJWT.isAdminOrClient], ventasCtrl.getVentaByBuyer);
router.get('/entrefechas/:from&:to', [authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.getVentaByEntreFechas);
router["delete"]('/:ventaId', [authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.deleteVenta);
router.put('/', [authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.updateVenta);
var _default = exports["default"] = router;