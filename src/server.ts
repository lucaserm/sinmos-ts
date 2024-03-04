import express from 'express';
import { router } from './routes';
import 'reflect-metadata';
import { AppDataSource as BD } from './database';

const app = express();

app.use(express.json());
app.use(router);

const PORT: number = 3333;

BD.initialize()
	.then(() => {
		console.log('Conectado à base de dados.');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => console.log(error));
