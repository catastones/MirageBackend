import { Router } from "express";
const router = Router();

import * as userCtrl from '../controller/user.controller'


 router.post('/newuser',userCtrl.singnup);
 router.post('/login',userCtrl.singnin);
// router.get('/', userCtrl.listarUser);
// router.get('/:userId',userCtrl.buscarUserById);
// router.post('/newuser',[verify.checkRolesExisted,verify.checkDuplicateUsername],userCtrl.singnup);

// router.delete('/:userId',userCtrl.borarrUserById);
// router.put('/:userId',userCtrl.updateUser);

export default router;