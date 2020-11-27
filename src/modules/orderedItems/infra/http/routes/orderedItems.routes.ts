import { Router } from 'express';

import CartController from '../controllers/OrderedItemsController';

const cartRouter = Router();
const cartController = new CartController();

cartRouter.get('/', cartController.index);

export default cartRouter;
