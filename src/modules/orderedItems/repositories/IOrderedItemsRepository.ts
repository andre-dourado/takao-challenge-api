import Category from '../infra/typeorm/entities/OrderedItem';

export default interface IOrderedItemsRepository {
  findAll(): Promise<Category[]>;
}
