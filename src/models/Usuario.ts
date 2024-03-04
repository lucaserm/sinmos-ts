import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
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

	@ManyToMany(() => Cargo)
	@JoinTable({
		name: 'UsuariosCargos',
		joinColumns: [{ name: 'id_cargo' }],
		inverseJoinColumns: [{ name: 'id_usuario' }],
	})
	cargos: Cargo[];
}

export default Usuario;
