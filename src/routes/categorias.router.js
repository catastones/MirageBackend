import { Router } from "express";
const router = Router();

import * as categoriaCtrl from '../controller/categoria.controller'
import * as authJWT from "../middlewares/authJWT"


 router.post('/',[authJWT.verifyToken, authJWT.isAdmin],categoriaCtrl.newCategoria);
 router.get('/', categoriaCtrl.getCategorias);
 router.get('/:name', categoriaCtrl.getCategoriasByName);
 router.delete('/:categoriaId',[authJWT.verifyToken,authJWT.isAdmin],categoriaCtrl.deleteCategorias);
 router.put('/',[authJWT.verifyToken,authJWT.isAdmin],categoriaCtrl.updateCategorias);

export default router;