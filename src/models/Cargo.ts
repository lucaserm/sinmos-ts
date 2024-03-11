import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Usuario from './Usuario';
@Entity('Cargos')
class Cargo {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	nome: string;

	@Column()
	descricao: string;

	@OneToMany(() => Usuario, (usuario) => usuario.cargo)
	usuarios: Usuario[];
}

export default Cargo;
