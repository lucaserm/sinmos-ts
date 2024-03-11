import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cargo from './Cargo';

@Entity('Usuarios')
class Usuario {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	nome: string;

	@Column()
	senha?: string;

	@Column()
	codigo: string;

	@ManyToOne(() => Cargo, (cargo) => cargo.usuarios)
	cargo: Cargo | null;
}

export default Usuario;
