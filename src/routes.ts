import { Router } from 'express';
import UsuarioController from './controllers/UsuarioController';
import SessionController from './controllers/SessionController';

const router = Router();

router.post('/usuarios', UsuarioController.create);
router.post('/sessions', SessionController.create);

export { router };
