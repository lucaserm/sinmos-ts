import { AppDataSource } from '../database';
import Usuario from '../models/Usuario';

export const usuarioRepository = AppDataSource.getRepository(Usuario);
