import { Request, Response } from 'express';
import { In } from 'typeorm';

import { cargoRepository } from '../repositories/CargoRepository';
import { permissaoRepository } from '../repositories/PermissaoRepository';

class CargoController {
	async create(request: Request, response: Response) {
		const { nome, descricao, permissoes } = request.body;

		const existeCargo = await cargoRepository.findOne({
			where: { nome },
		});

		if (existeCargo) {
			return response
				.status(409)
				.json({ error: 'Este cargo já está cadastrado.' });
		}

		const existePermissoes = await permissaoRepository.findBy({
			id: In(permissoes),
		});

		const cargo = cargoRepository.create({
			nome,
			descricao,
			permissoes: existePermissoes,
		});

		await cargoRepository.save(cargo);

		return response.status(201).json(cargo);
	}
}

export default new CargoController();
