import { Request, Response } from 'express';
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
			relations: ['cargos'],
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
			expiresIn: 30,
		});

		delete usuario.senha;

		response.cookie('token', token, {
			maxAge: 1800000,
			expires: new Date(Date.now() + 1800000),
			httpOnly: true,
			sameSite: 'strict',
		});

		const cargo = usuario.cargo.nome
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();

		return response.redirect(`/${cargo}/index`);
	}
}

export default new SessionController();
