import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Responsavel from './Responsaveis';

@Entity('Estudantes')
class Estudante {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Responsavel)
    responsavel: Responsavel;

    @Column()
    cpf: string;

    @Column()
    ra: string;

    @Column()
    foto: string;

    @Column()
    nome_estudante: string;

    @Column()
    email_institucional: string;
}

export default Estudante;
