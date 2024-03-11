import { NextFunction, Request, Response } from 'express';
import { decode } from 'jsonwebtoken';
import { AppDataSource } from '../database';
import Usuario from '../models/Usuario';

async function decoder(request: Request): Promise<Usuario | null> {
	// const authHeader = request.headers.authorization || '';
	// const [, token] = authHeader?.split(' ');
	const cookie = request.cookies.token;
	const usuarioRepository = AppDataSource.getRepository(Usuario);

	const payload = decode(cookie);

	const usuario = await usuarioRepository.findOne({
		where: { id: payload?.sub?.toString() },
		relations: ['cargo'],
	});

	return usuario;
}
function is(cargos: String[]) {
	const roleAuthorized = async (
		request: Request,
		response: Response,
		next: NextFunction
	) => {
		const usuario = await decoder(request);

		const existeCargo = cargos.includes(usuario?.cargo?.nome + '');

		if (existeCargo) {
			next();
		} else {
			return response.render('auth/auth-401');
		}
	};

	return roleAuthorized;
}

export { is };
