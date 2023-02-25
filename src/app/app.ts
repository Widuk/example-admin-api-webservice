import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../../docs/swagger.json';
import userRouter from '../routes/user.router';
import healthRouter from '../routes/health.router';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/', healthRouter);
    this.app.use('/api', userRouter);
    this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default new App().app;
