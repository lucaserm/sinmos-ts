import { Request, Response } from 'express';

import { permissaoRepository } from '../repositories/PermissaoRepository';

class PermissaoController {
	async create(request: Request, response: Response) {
		const { nome, descricao } = request.body;

		const existePermissao = await permissaoRepository.findOne({
			where: { nome },
		});

		if (existePermissao) {
			return response
				.status(409)
				.json({ error: 'Esta permissão já está cadastrada.' });
		}

		const permissao = permissaoRepository.create({
			nome,
			descricao,
		});

		await permissaoRepository.save(permissao);

		return response.status(201).json(permissao);
	}
}

export default new PermissaoController();
