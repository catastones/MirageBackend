import { Router } from "express";
const router = Router();

import * as categoriaCtrl from '../controller/categoria.controller'


 router.post('/',categoriaCtrl.newCategoria);
 router.get('/', categoriaCtrl.getCategorias);
 router.delete('/:categoriaId',categoriaCtrl.deleteCategorias);
 router.put('/',categoriaCtrl.updateCategorias);

export default router;