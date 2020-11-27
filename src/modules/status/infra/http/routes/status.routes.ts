import { Router } from 'express';

import StatusController from '../controllers/StatusController';

const statusRouter = Router();
const statusController = new StatusController();

statusRouter.get('/', statusController.index);

export default statusRouter;
