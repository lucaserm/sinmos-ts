import { Repository } from 'typeorm';
import Usuario from '../models/Usuario';

class UsuarioRepository extends Repository<Usuario> {}

export default UsuarioRepository;
