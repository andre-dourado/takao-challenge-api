import { getRepository, Repository } from 'typeorm';

import IPurchasesRepository from '@modules/purchases/repositories/IPurchasesRepository';
import Purchase from '../entities/Purchase';

class PurchasesRepository implements IPurchasesRepository {
  private ormRepository: Repository<Purchase>;

  constructor() {
    this.ormRepository = getRepository(Purchase);
  }

  public async findAll(): Promise<Purchase[]> {
    return this.ormRepository.find({
      relations: ['status'],
    });
  }
}

export default PurchasesRepository;
