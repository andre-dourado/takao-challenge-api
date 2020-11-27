import { getRepository, Repository } from 'typeorm';

import IOrderedItemsRepository from '@modules/orderedItems/repositories/IOrderedItemsRepository';
import OrderedItem from '../entities/OrderedItem';

class OrderedItemsRepository implements IOrderedItemsRepository {
  private ormRepository: Repository<OrderedItem>;

  constructor() {
    this.ormRepository = getRepository(OrderedItem);
  }

  public async findAll(): Promise<OrderedItem[]> {
    return this.ormRepository.find({
      relations: ['products'],
    });
  }
}

export default OrderedItemsRepository;
