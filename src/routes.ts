import { Router } from 'express';
import UsuarioController from './controllers/UsuarioController';
import SessionController from './controllers/SessionController';
import PermissaoController from './controllers/PermissaoController';
import CargoController from './controllers/CargoController';

const router = Router();

router.post('/usuarios', UsuarioController.create);
router.post('/sessions', SessionController.create);
router.post('/permissoes', PermissaoController.create);
router.post('/cargos', CargoController.create);

export { router };
