import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

@injectable()
class ProductsListService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Product[]> {
    return this.productsRepository.findAllProducts();
  }
}

export default ProductsListService;
