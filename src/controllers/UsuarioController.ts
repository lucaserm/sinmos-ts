import { Request, Response } from 'express';
import { AppDataSource } from '../database';

import Usuario from '../models/Usuario';
import { hash } from 'bcryptjs';

class UsuarioController {
	async create(request: Request, response: Response) {
		const usuarioRepository = AppDataSource.getRepository(Usuario);

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

		const usuario = usuarioRepository.create({
			nome,
			senha: senhaCriptografada,
			codigo,
			cargo,
		});

		await usuarioRepository.save(usuario);

		delete usuario.senha;

		return response.status(201).json(usuario);
	}
}

export default new UsuarioController();
