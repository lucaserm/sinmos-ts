import { Request, Response } from 'express';

import { hash } from 'bcryptjs';
import { In } from 'typeorm';

import { cargoRepository } from '../repositories/CargoRepository';
import { usuarioRepository } from '../repositories/UsuarioRepository';

class UsuarioController {
	async read(request: Request, response: Response) {
		const usuarios = await usuarioRepository.find({
			relations: { cargo: true },
		});
		return response.status(201).json(usuarios);
	}

	async create(request: Request, response: Response) {
		const { nome, senha, codigo, cargo } = request.body;

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

		const existeCargo = await cargoRepository.findOne({
			where: {
				id: In(cargo),
			},
		});

		const usuario = usuarioRepository.create({
			nome,
			senha: senhaCriptografada,
			codigo,
			cargo: existeCargo,
		});

		await usuarioRepository.save(usuario);

		delete usuario.senha;

		return response.status(201).json(usuario);
	}

	async update(request: Request, response: Response) {
		const { id } = request.params;
		const { nome, senha, codigo, cargo } = request.body;

		const existeUsuario = await usuarioRepository.findOne({
			where: {
				id,
			},
		});

		if (!existeUsuario) {
			return response
				.status(409)
				.json({ message: 'ID de usuário não cadastrado!' });
		}

		const senhaCriptografada = await hash(senha, 8);

		const existeCargo = await cargoRepository.findOne({
			where: {
				id: In(cargo),
			},
		});

		const usuario = usuarioRepository.create({
			id,
			nome,
			senha: senhaCriptografada,
			codigo,
			cargo: existeCargo,
		});

		await usuarioRepository.save(usuario);

		delete usuario.senha;

		return response.status(201).json(usuario);
	}
}

export default new UsuarioController();
