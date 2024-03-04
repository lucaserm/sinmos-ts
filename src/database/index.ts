import { DataSource } from 'typeorm';
import Usuario from '../models/Usuario';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'sinmos',
	entities: ['./../models/*.ts', Usuario],
	synchronize: false,
	logging: false,
	migrations: ['./migrations/*.ts'],
});

AppDataSource.initialize()
	.then(() => {
		console.log('Conectado à base de dados.');
	})
	.catch((error) => console.log(error));
