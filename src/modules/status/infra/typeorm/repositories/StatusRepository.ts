import { getRepository, Repository } from 'typeorm';

import IStatusRepository from '@modules/status/repositories/IStatusRepository';
import Status from '../entities/PurchaseStatus';

class StatusRepository implements IStatusRepository {
  private ormRepository: Repository<Status>;

  constructor() {
    this.ormRepository = getRepository(Status);
  }

  public async findAll(): Promise<Status[]> {
    return this.ormRepository.find();
  }
}

export default StatusRepository;
