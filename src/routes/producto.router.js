import { Router } from "express";
const router = Router();

import * as productoCtrl from '../controller/producto.controller'
import * as authJWT from "../middlewares/authJWT"


 router.post('/',[authJWT.verifyToken, authJWT.isAdmin],productoCtrl.newProducto);
 router.get('/', productoCtrl.getProductos);
 router.get('/byid/:productoId', productoCtrl.getProductoById);
 router.get('/categoria/:categoria', productoCtrl.getProductoByCategoria);
 router.delete('/:productoId',[authJWT.verifyToken, authJWT.isAdmin],productoCtrl.deleteProducto);
 router.put('/',[authJWT.verifyToken, authJWT.isAdmin],productoCtrl.updateProducto);

export default router;