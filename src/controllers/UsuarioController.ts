import { Request, Response } from 'express';
import { AppDataSource } from '../database';

import { hash } from 'bcryptjs';
import Cargo from '../models/Cargo';
import { In } from 'typeorm';

import { cargoRepository } from '../repositories/CargoRepository';
import { usuarioRepository } from '../repositories/UsuarioRepository';

class UsuarioController {
	async create(request: Request, response: Response) {
		const { nome, senha, codigo, cargos } = request.body;

		const existeUsuario = await usuarioRepository.findOne({
			where: {
				codigo,
			},
		});

		if (existeUsuario) {
			return response
				.status(409)
				.json({ message: 'Código de usuário já cadastrado!' });
		}

		const senhaCriptografada = await hash(senha, 8);

		const existeCargos = await cargoRepository.findBy({
			id: In(cargos),
		});

		const usuario = usuarioRepository.create({
			nome,
			senha: senhaCriptografada,
			codigo,
			cargos: existeCargos,
		});

		await usuarioRepository.save(usuario);

		delete usuario.senha;

		return response.status(201).json(usuario);
	}
}

export default new UsuarioController();
