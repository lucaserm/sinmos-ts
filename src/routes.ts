import { Router } from 'express';
import UsuarioController from './controllers/UsuarioController';
import SessionController from './controllers/SessionController';
import PermissaoController from './controllers/PermissaoController';
import CargoController from './controllers/CargoController';

import { is } from './middlewares/permissao';
import PublicController from './controllers/PublicController';

const router = Router();

//Rotas Públicas
router.get('/', PublicController.index); //Página Inicial
router.get('/login', PublicController.login);
router.get('/logout', PublicController.logout);

router.get('/usuarios', is(['Coordenação']), UsuarioController.read);

router.post('/usuarios', UsuarioController.create);
router.post('/sessions', SessionController.create);
router.post('/permissoes', PermissaoController.create);
router.post('/cargos', CargoController.create);

export { router };
