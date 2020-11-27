import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

const corsOptions = {
  exposedHeaders: 'X-Total-Count',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal error server',
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333!');
});
