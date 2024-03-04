import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import UsuarioRepository from '../repositories/UsuarioRepository';
import Usuario from '../models/Usuario';

class UsuarioController {
	async create(request: Request, response: Response) {
		const usuarioRepository = AppDataSource.getRepository(Usuario);

		const { nome, senha, codigo, cargo } = request.body;

		const existeUsuario = await usuarioRepository.findOneBy(codigo);

		if (existeUsuario) {
			return response
				.status(409)
				.json({ message: 'Código de usuário já cadastrado!' });
		}

		const usuario = usuarioRepository.create({
			nome,
			senha,
			codigo,
			cargo,
		});

		await usuarioRepository.save(usuario);

		return response.status(201).json(usuario);
	}
}

export default new UsuarioController();
