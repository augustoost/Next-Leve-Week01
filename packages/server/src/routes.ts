import express, { request, response } from 'express';
import knex from './database/connection';

import PointsController from './Controllers/PointsController';
import ItemsController from './Controllers/ItemsController';

const routes = express.Router();

const poitnsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', poitnsController.create);
routes.get('/points', poitnsController.index);
routes.get('/points/:id', poitnsController.show);

export default routes;