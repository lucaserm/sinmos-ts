import express from 'express';
import { router } from './routes';
import { AppDataSource as BD } from './database';
import path from 'path';

import 'reflect-metadata';

const app = express();

app.use(express.json());
app.use(router);

const PORT: number = 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/..' + '/public'));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

BD.initialize()
	.then(() => {
		console.log('Conectado à base de dados.');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => console.log(error));
