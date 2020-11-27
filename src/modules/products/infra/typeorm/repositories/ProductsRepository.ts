import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/ICategoriesRepository';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAllProducts(): Promise<Product[]> {
    return this.ormRepository.find();
  }
}

export default ProductsRepository;
