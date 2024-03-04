import { NextFunction, Request, Response } from 'express';
import { decode } from 'jsonwebtoken';
import { AppDataSource } from '../database';
import Usuario from '../models/Usuario';

async function decoder(request: Request): Promise<Usuario | null> {
	const authHeader = request.headers.authorization || '';
	const usuarioRepository = AppDataSource.getRepository(Usuario);

	const [, token] = authHeader?.split(' ');

	const payload = decode(token);

	const usuario = await usuarioRepository.findOne({
		where: { id: payload?.sub?.toString() },
		relations: ['roles'],
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

		const usuarioCargos = usuario?.cargos.map((cargo) => cargo.nome);

		const existeCargo = usuarioCargos?.some((c) => cargos.includes(c));

		if (existeCargo) {
			next();
		}

		return response
			.status(401)
			.send({ error: 'Não tem permissão para acessar esse recurso.' });
	};
}
