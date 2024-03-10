import { Router } from 'express';
import UsuarioController from './controllers/UsuarioController';
import SessionController from './controllers/SessionController';
import PermissaoController from './controllers/PermissaoController';
import CargoController from './controllers/CargoController';

import { is } from './middlewares/permissao';
import PublicController from './controllers/PublicController';

const router = Router();

//Rotas Públicas
router.get('/', is(['Portaria']), PublicController.index); //Página Inicial
router.get('/login', is([]), PublicController.login);

router.get('/usuarios', UsuarioController.read);

router.post('/usuarios', UsuarioController.create);
router.post('/sessions', SessionController.create);
router.post('/permissoes', PermissaoController.create);
router.post('/cargos', CargoController.create);

export { router };
