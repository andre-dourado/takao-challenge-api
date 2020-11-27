import { container } from 'tsyringe';

import './providers';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import IProductsRepository from '@modules/products/repositories/ICategoriesRepository';
import IOrderedItemsRepository from '@modules/orderedItems/repositories/IOrderedItemsRepository';
import OrderedItemsRepository from '@modules/orderedItems/infra/typeorm/repositories/OrderedItemsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IOrderedItemsRepository>(
  'OrderedItemsRepository',
  OrderedItemsRepository,
);
