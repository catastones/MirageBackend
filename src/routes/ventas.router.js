import { Router } from "express";
const router = Router();

import * as ventasCtrl from '../controller/ventas.controller'
import * as authJWT from "../middlewares/authJWT"

 router.post('/',[authJWT.verifyToken, authJWT.isAdminOrClient],ventasCtrl.newVenta);
 router.get('/',[authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.listVenta);
 router.get('/:ventaId',[authJWT.verifyToken, authJWT.isAdminOrClient], ventasCtrl.getVentaById);
 router.get('/bybuyer/:buyerId',[authJWT.verifyToken, authJWT.isAdminOrClient], ventasCtrl.getVentaByBuyer);
 router.get('/entrefechas/:from&:to',[authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.getVentaByEntreFechas);
 router.delete('/:ventaId',[authJWT.verifyToken, authJWT.isAdmin],ventasCtrl.deleteVenta);
 router.put('/',[authJWT.verifyToken, authJWT.isAdmin], ventasCtrl.updateVenta);

export default router;