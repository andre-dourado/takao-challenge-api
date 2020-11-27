import { injectable, inject } from 'tsyringe';

import Purchase from '../infra/typeorm/entities/Purchase';
import IPurchasesRepository from '../repositories/IPurchasesRepository';

@injectable()
class PurchasesListService {
  constructor(
    @inject('PurchasesRepository')
    private purchasesRepository: IPurchasesRepository,
  ) {}

  public async execute(): Promise<Purchase[]> {
    return this.purchasesRepository.findAll();
  }
}

export default PurchasesListService;
