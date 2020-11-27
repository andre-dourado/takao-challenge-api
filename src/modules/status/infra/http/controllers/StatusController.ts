import { Request, Response } from 'express';
import { container } from 'tsyringe';

import StatusListService from '@modules/status/services/StatusListService';

export default class PurchasesController {
  public async index(_: Request, response: Response): Promise<Response> {
    const statusList = container.resolve(StatusListService);

    const status = await statusList.execute();

    return response.json(status);
  }
}
