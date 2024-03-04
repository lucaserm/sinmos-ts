import { AppDataSource } from '../database';
import Cargo from '../models/Cargo';

export const cargoRepository = AppDataSource.getRepository(Cargo);
