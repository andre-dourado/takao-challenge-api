import { Router } from 'express';

import PurchasesController from '../controllers/PurchasesController';

const purchasesRouter = Router();
const purchasesController = new PurchasesController();

purchasesRouter.get('/', purchasesController.index);

export default purchasesRouter;
