import { Router } from 'express';

import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import cartRouter from '@modules/orderedItems/infra/http/routes/orderedItems.routes';
import statusRouter from '@modules/status/infra/http/routes/status.routes';
import purchasesRouter from '@modules/purchases/infra/http/routes/purchases.routes';

const routes = Router();

routes.use('/categorias', categoriesRouter);
routes.use('/produtos', productsRouter);
routes.use('/itemPedido', cartRouter);
routes.use('/pedidos', purchasesRouter);
routes.use('/status', statusRouter);

export default routes;
