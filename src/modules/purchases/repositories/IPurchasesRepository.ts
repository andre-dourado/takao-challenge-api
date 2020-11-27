import Purchase from '../infra/typeorm/entities/Purchase';

export default interface IPurchasesRepository {
  findAll(): Promise<Purchase[]>;
}
