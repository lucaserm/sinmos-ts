import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Responsaveis')
class Responsavel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    telefone_responsavel: string;

    @Column()
    email_responsavel: string;

    @Column()
    nome_responsavel: string;
}

export default Responsavel;
