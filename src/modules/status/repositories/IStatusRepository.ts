import Status from '../infra/typeorm/entities/PurchaseStatus';

export default interface IStatusRepository {
  findAll(): Promise<Status[]>;
}
