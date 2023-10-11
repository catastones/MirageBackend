import { Router } from "express";
const router = Router();

import * as ventasCtrl from '../controller/ventas.controller'


 router.post('/',ventasCtrl.newVenta);
 router.get('/', ventasCtrl.listVenta);
 router.get('/:ventaId', ventasCtrl.getVentaById);
 router.get('/bybuyer/:buyerId', ventasCtrl.getVentaByBuyer);
 router.get('/entrefechas/:from&:to', ventasCtrl.getVentaByEntreFechas);
 router.delete('/:ventaId',ventasCtrl.deleteVenta);
 router.put('/',ventasCtrl.updateVenta);

export default router;