import { Request, Response } from 'express';

class CoordenacaoController {
	async index(request: Request, response: Response) {
		response.render('auth/coordenacao/index');
	}
}

export default new CoordenacaoController();
