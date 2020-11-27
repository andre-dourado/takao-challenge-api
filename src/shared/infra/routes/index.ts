import { Router } from 'express';

import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import cartRouter from '@modules/orderedItems/infra/http/routes/orderedItems.routes';

const routes = Router();

routes.use('/categorias', categoriesRouter);
routes.use('/produtos', productsRouter);
routes.use('/itemPedido', cartRouter);

export default routes;
