import { Request, Response } from 'express';
import { container } from 'tsyringe';

import OrderedItemsListService from '@modules/orderedItems/services/OrderedItemsListService';

export default class CartController {
  public async index(_: Request, response: Response): Promise<Response> {
    const orderedItemsList = container.resolve(OrderedItemsListService);

    const orderedItems = await orderedItemsList.execute();

    return response.json(orderedItems);
  }
}
