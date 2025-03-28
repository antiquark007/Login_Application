import { Router } from 'express';
import { Application } from 'express';
import * as userController from '../controllers/userController.js'

const router = Router();

const setUserRoutes = (app: Application) => {
  router.post('/register', userController.register);
  router.post('/login', userController.login);

  app.use('/api/users', router);
};

export default setUserRoutes;