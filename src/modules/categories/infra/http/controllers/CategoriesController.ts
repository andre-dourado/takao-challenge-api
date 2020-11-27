import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CategoriesListService from '@modules/categories/services/CategoriesListService';

export default class CategoriesController {
  public async index(_: Request, response: Response): Promise<Response> {
    const categoriesList = container.resolve(CategoriesListService);

    const categories = await categoriesList.execute();

    return response.json(classToClass(categories));
  }
}
