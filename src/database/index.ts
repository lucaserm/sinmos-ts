import { DataSource } from 'typeorm';
import Usuario from '../models/Usuario';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.HOST,
	port: Number.parseInt(process.env.PORT + ''),
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
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
