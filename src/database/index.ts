import { DataSource } from 'typeorm';
import Usuario from '../models/Usuario';
import Cargo from '../models/Cargo';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'sinmos',
	entities: ['./../models/*.ts', Usuario, Cargo],
	synchronize: true,
	logging: false,
	migrations: ['./src/database/migrations/*.ts'],
});
