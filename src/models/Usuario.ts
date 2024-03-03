import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios')
class Usuario {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	nome: string;

	@Column()
	senha: string;

	@Column()
	codigo: string;

	@Column()
	cargo: string;
}

export default Usuario;
