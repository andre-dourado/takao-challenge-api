import { injectable, inject } from 'tsyringe';

import Category from '@modules/categories/infra/typeorm/entities/Category';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

@injectable()
class CategoriesListService {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }
}

export default CategoriesListService;
