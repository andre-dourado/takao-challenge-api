import { injectable, inject } from 'tsyringe';

import OrderedItem from '@modules/orderedItems/infra/typeorm/entities/OrderedItem';

import IOrderedItemsRepository from '../repositories/IOrderedItemsRepository';

@injectable()
class OrderedItemsListService {
  constructor(
    @inject('OrderedItemsRepository')
    private orderedItemsRepository: IOrderedItemsRepository,
  ) {}

  public async execute(): Promise<OrderedItem[]> {
    return this.orderedItemsRepository.findAll();
  }
}

export default OrderedItemsListService;
