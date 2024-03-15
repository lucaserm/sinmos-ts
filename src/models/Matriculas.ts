import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Estudante from './Estudantes';
import Curso from './Cursos';

@Entity('Matriculas')
class Matricula {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Estudante)
    estudante: Estudante;

    @Column()
    id_cursos: number;

    @Column()
    ano_matricula: number;
}

export default Matricula;
