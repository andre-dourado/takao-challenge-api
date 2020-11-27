import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ProductsListService from '@modules/products/services/ProductsListService';

export default class CategoriesController {
  public async index(_: Request, response: Response): Promise<Response> {
    const productsList = container.resolve(ProductsListService);

    const products = await productsList.execute();

    return response.json(classToClass(products));
  }
}
