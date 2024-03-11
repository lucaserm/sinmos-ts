import { Router } from 'express';
import UsuarioController from './controllers/UsuarioController';
import SessionController from './controllers/SessionController';
import CargoController from './controllers/CargoController';

import { is } from './middlewares/permissao';
import PublicController from './controllers/PublicController';
import CoordenacaoController from './controllers/CoordenacaoController';

const router = Router();

//Rotas Públicas
router.get('/', PublicController.index); //Página Inicial
router.get('/login', PublicController.login);
router.get('/logout', PublicController.logout);

router.get('/cargos', is(['Coordenação']), CargoController.read);
router.get('/usuarios', is(['Coordenação']), UsuarioController.read);

router.get(
	'/coordenacao/index',
	is(['Coordenação']),
	CoordenacaoController.index
);
router.get('/assistencia/index', is(['Assistência']));
router.get('/portaria/index', is(['Portaria']));

router.post('/usuarios', UsuarioController.create);
router.post('/usuarios/:id', UsuarioController.update);

router.post('/sessions', SessionController.create);
router.post('/cargos', CargoController.create);

export { router };
