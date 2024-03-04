import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import Permission from './Permissao';
@Entity('Cargos')
class Cargo {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	nome: string;

	@Column()
	descricao: string;

	@ManyToMany(() => Permission)
	@JoinTable({
		name: 'PermissoesCargos',
		joinColumns: [{ name: 'id_cargo' }],
		inverseJoinColumns: [{ name: 'id_permissao' }],
	})
	permissoes: Permission[];
}

export default Cargo;
