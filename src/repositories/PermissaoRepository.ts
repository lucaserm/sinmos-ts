import { AppDataSource } from '../database';
import Permissao from '../models/Permissao';

export const permissaoRepository = AppDataSource.getRepository(Permissao);
