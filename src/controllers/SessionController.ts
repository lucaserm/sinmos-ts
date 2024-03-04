import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import Usuario from '../models/Usuario';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { usuarioRepository } from '../repositories/UsuarioRepository';

class SessionController {
	async create(request: Request, response: Response) {
		const { codigo, senha } = request.body;

		const usuario = await usuarioRepository.findOne({
			where: {
				codigo,
			},
		});

		if (!usuario) {
			return response.status(401).json({ error: 'Usuário não encontrado.' });
		}

		const matchPassword = await compare(senha, usuario.senha || '');

		if (!matchPassword) {
			return response
				.status(401)
				.json({ error: 'Usuário ou senha incorretos. Tente novamente.' });
		}

		const hash_token: string = process.env.HASH_TOKEN + '';

		const token = sign({}, hash_token, {
			subject: usuario.id,
			expiresIn: '1d',
		});

		return response.json({
			token,
			usuario,
		});
	}
}

export default new SessionController();
