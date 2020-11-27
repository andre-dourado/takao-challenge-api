import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PurchasesListService from '@modules/purchases/services/PurchasesListService';

export default class PurchasesController {
  public async index(_: Request, response: Response): Promise<Response> {
    const purchasesList = container.resolve(PurchasesListService);

    const purchases = await purchasesList.execute();

    return response.json(purchases);
  }
}
