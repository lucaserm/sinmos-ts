import { DataSource } from 'typeorm';
import Usuario from '../models/Usuario';
import Permissao from '../models/Permissao';
import Cargo from '../models/Cargo';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'sinmos',
	entities: ['./../models/*.ts', Usuario, Permissao, Cargo],
	synchronize: true,
	logging: false,
	migrations: ['./src/database/migrations/*.ts'],
});
