import { injectable, inject } from 'tsyringe';

import PurchaseStatus from '../infra/typeorm/entities/PurchaseStatus';
import IStatusRepository from '../repositories/IStatusRepository';

@injectable()
class StatusListService {
  constructor(
    @inject('StatusRepository')
    private statusRepository: IStatusRepository,
  ) {}

  public async execute(): Promise<PurchaseStatus[]> {
    return this.statusRepository.findAll();
  }
}

export default StatusListService;
