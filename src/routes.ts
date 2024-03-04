import { Router } from 'express';
import UsuarioController from './controllers/UsuarioController';

const router = Router();

router.post('/usuarios', UsuarioController.create);

export { router };
