import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import Cargo from '../models/Cargo';
import Permissao from '../models/Permissao';
import { In } from 'typeorm';

class CargoController {
	async create(request: Request, response: Response) {
		const cargoRepository = AppDataSource.getRepository(Cargo);
		const permissaoRepository = AppDataSource.getRepository(Permissao);

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
