import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Permissoes')
class Permissao {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	nome: string;

	@Column()
	descricao: string;
}

export default Permissao;
