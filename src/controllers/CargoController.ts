import { Request, Response } from 'express';

import { cargoRepository } from '../repositories/CargoRepository';

class CargoController {
	async read(request: Request, response: Response) {
		const cargos = await cargoRepository.find();
		return response.status(201).json(cargos);
	}

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

		const cargo = cargoRepository.create({
			nome,
			descricao,
		});

		await cargoRepository.save(cargo);

		return response.status(201).json(cargo);
	}
}

export default new CargoController();
